const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 mt-auto">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-center">
          <p className="text-gray-500 dark:text-white">
            &copy; {new Date().getFullYear()} Arthur Sobreira
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
