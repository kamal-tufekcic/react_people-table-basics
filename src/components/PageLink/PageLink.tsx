import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Person } from '../../types';

type Props = {
  people: Person[],
  person: Person,
  isSelected: (person: Person) => boolean,
};

export const PageLink: React.FC<Props> = ({ people, person, isSelected }) => {
  const mother = people.find(user => user.name === person.motherName);
  const father = people.find(user => user.name === person.fatherName);

  return (
    <tr
      data-cy="person"
      className={classNames(
        { 'has-background-warning': isSelected(person) },
      )}
    >
      <td>
        <Link
          to={`../${person.slug}`}
          className={classNames(
            { 'has-text-danger': person.sex === 'f' },
          )}
        >
          {person.name}
        </Link>
      </td>

      <td>{person.sex}</td>
      <td>{person.born}</td>
      <td>{person.died}</td>

      <td>
        {mother
          ? (
            <Link
              className={classNames(
                { 'has-text-danger': mother.sex === 'f' },
              )}
              to={`../${mother.slug}`}
            >
              {person.motherName}
            </Link>
          )
          : (
            <p>
              {person.motherName || '-'}
            </p>
          )}
      </td>

      <td>
        {father
          ? (
            <Link
              className={classNames(
                { 'has-text-danger': father.sex === 'f' },
              )}
              to={`../${father.slug}`}
            >
              {person.fatherName || '-'}
            </Link>
          )
          : person.fatherName || '-'}

      </td>
    </tr>
  );
};