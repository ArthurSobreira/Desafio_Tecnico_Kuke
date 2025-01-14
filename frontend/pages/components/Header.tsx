import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-900">
			<div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<div className="flex-1 md:flex md:items-center md:gap-12">
						<Link href="/" className="block text-teal-600 dark:text-teal-300">
							<span className="sr-only">Home</span>
							<Image src="/clapper_board.svg" alt="Logo" width={40} height={40} />
						</Link>
					</div>

					<div className="md:flex md:items-center md:gap-12">
						<nav aria-label="Global" className="hidden md:block">
							<ul className="flex items-center gap-6 text-sm">
								<li><a className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
									href="#">About</a>
								</li>

								<li><a className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
									href="#">Services</a>
								</li>

								<li><a className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
									href="#">Projects</a>
								</li>
							</ul>
						</nav>

						<div className="relative hidden md:block">
							<button
								type="button"
								className="flex items-center overflow-hidden rounded-full border border-gray-300 shadow-inner dark:border-gray-600">
								<span className="sr-only">Toggle dashboard menu</span>

								<img
									src="https://avatars.githubusercontent.com/u/88062543?v=4"
									alt=""
									className="size-10 object-cover"
								/>
							</button>
						</div>
					</div>
				</div>
			</div>
		</header>
  );
};

export default Header;
