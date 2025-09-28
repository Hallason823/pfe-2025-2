'use client';
import styled from "styled-components";

const SingleStyledComponent = styled.div`position: ${(props) => props.position || 'static'}; top: ${(props) => props.top || 'auto'};
                        left: ${(props) => props.left || 'auto'}; right: ${(props) => props.right || 'auto'};
                        bottom: ${(props) => props.bottom || 'auto'}; height: ${(props) => props.height};
                        width: ${(props) => props.width || 'auto'}; background: ${(props) => props.color || 'auto'};
                        border-radius: ${(props) => props.border_radius || 'auto'}; border: ${(props) => props.border || 'auto'};
                        rotate: ${(props) => props.rotate || 'auto'};`;

export default function StyledComponent(props) {
  return (<SingleStyledComponent {...props} />);
}

export const Button = styled.button.withConfig({shouldForwardProp: (prop) => prop !== "isactive",})`opacity: ${(p) => (p.isactive ? "1" : "0.25")};`;