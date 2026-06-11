import Image from "next/image";
import Link from "next/link";

import notFound from "../../public/images/notFound.png";

const NotFoundPage = () => {
  return (
    <div className="notFoundBox">
      <div className="twinBox">
        <h1 className="errorCode">
          4
          <Image
            src={notFound}
            alt=""
            aria-hidden="true"
            width={90}
            height={80}
          />
          4
        </h1>

        <Link href="/">Oooops! Looks like this page is ghosted!</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
