import { SearchIcon } from '@icons';
import {
  Card,
  Input,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@ui';

export const SearchTable = () => {
  return (
    <Card
      title="Заголовок таблицы"
      header={
        <Input
          className="w-[150px] mr-2"
          placeholder="Поиск"
          icon={<SearchIcon />}
        />
      }
    >
      <Table className="border rounded-lg mt-2">
        <TableHeader>
          <TableRow>
            <TableHead className="border rounded-lg">Дата публикации</TableHead>
            <TableHead className="border rounded-lg">
              Тип медиа источника
            </TableHead>
            <TableHead className="border rounded-lg">Медиа источник</TableHead>
            <TableHead className="border rounded-lg text-left">1</TableHead>
            <TableHead className="border rounded-lg text-left">2</TableHead>
            <TableHead className="border rounded-lg text-left">3</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="border rounded-lg p-10"></TableCell>
            <TableCell className="border rounded-lg p-10"></TableCell>
            <TableCell className="border rounded-lg p-10"></TableCell>
            <TableCell className="border rounded-lg p-10"></TableCell>
            <TableCell className="border rounded-lg p-10"></TableCell>
            <TableCell className="border rounded-lg p-10"></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border rounded-lg p-10"></TableCell>
            <TableCell className="border rounded-lg p-10"></TableCell>
            <TableCell className="border rounded-lg p-10"></TableCell>
            <TableCell className="border rounded-lg p-10"></TableCell>
            <TableCell className="border rounded-lg p-10"></TableCell>
            <TableCell className="border rounded-lg p-10"></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border rounded-lg p-10"></TableCell>
            <TableCell className="border rounded-lg p-10"></TableCell>
            <TableCell className="border rounded-lg p-10"></TableCell>
            <TableCell className="border rounded-lg p-10"></TableCell>
            <TableCell className="border rounded-lg p-10"></TableCell>
            <TableCell className="border rounded-lg p-10"></TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Pagination className="flex justify-end w-full max-w-full mt-2.5">
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </Card>
  );
};
