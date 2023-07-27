import React, { useState } from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Collapse, Checkbox } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import './DepartmentList.css';



interface DepartmentData {
  department: string;
  sub_departments: string[];
}

interface DepartmentListProps {
  data: DepartmentData[];
}

const DepartmentList: React.FC<DepartmentListProps> = ({ data }) => {
  const [open, setOpen] = useState(true);
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
  const [selectedSubDepartments, setSelectedSubDepartments] = useState<string[]>([]);

  const handleDepartmentClick = () => {
    setOpen(!open);
  };

  const handleDepartmentSelect = (department: string) => {
    if (selectedDepartments.includes(department)) {
      setSelectedDepartments(selectedDepartments.filter((dep) => dep !== department));
      setSelectedSubDepartments(
        selectedSubDepartments.filter(
          (subDept) => !data.find((dept) => dept.department === department)?.sub_departments.includes(subDept)
        )
      );
    } else {
      setSelectedDepartments([...selectedDepartments, department]);
      setSelectedSubDepartments([
        ...selectedSubDepartments,
        ...(data.find((dept) => dept.department === department)?.sub_departments || []), // Ensure sub_departments array is available
      ]);
    }
  };

  const handleSubDepartmentSelect = (subDepartment: string) => {
    setSelectedSubDepartments((prevSelected) =>
      prevSelected.includes(subDepartment)
        ? prevSelected.filter((subDept) => subDept !== subDepartment)
        : [...prevSelected, subDepartment]
    );
  };

  return (
    <List component="nav" aria-labelledby="nested-list-subheader">
      {data.map((dept) => (
        <React.Fragment key={dept.department}>
          <ListItemButton onClick={handleDepartmentClick}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={selectedDepartments.includes(dept.department)}
                onClick={() => handleDepartmentSelect(dept.department)}
              />
            </ListItemIcon>
            <ListItemText primary={dept.department} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {dept.sub_departments.map((subDept) => (
                <ListItem key={subDept}>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={selectedSubDepartments.includes(subDept)}
                      onClick={() => handleSubDepartmentSelect(subDept)}
                    />
                  </ListItemIcon>
                  <ListItemText primary={subDept} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  );
};

export default DepartmentList;
