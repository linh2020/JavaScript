function CustomComponent({ title, href, onClick }) {
        let MyComponent = "button";
        let customProps = {};
        if (href) {
          MyComponent = "a";
          customProps.href = href;
          customProps.target = "_blank";
        }

        if (onClick) {
          customProps.onClick = onClick;
        }
        //return <MyComponent {...customProps}>{title}</MyComponent>;
        // is similar to
        return <MyComponent href={href} target="_blank">{title}</MyComponent>;
      }
