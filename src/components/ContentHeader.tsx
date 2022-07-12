import Link from "next/link";

interface ContentHeaderProps {
  name: string;
  pathname: string;
  url: string;
}

const ContentHeader = ({ name, pathname, url }: ContentHeaderProps) => {
  return (
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0">{name}</h1>
          </div>

          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item">admin</li>
              <li className="breadcrumb-item active">
                <Link href={url}>
                  <a>{pathname}</a>
                </Link>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;
