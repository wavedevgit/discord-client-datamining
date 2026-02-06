package rt;

import java.io.InvalidObjectException;
import java.io.ObjectInputStream;
import java.io.Serializable;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface l0 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements Serializable {
        private static final long serialVersionUID = 1564804888291509484L;
        private final long amount;
        private final Object unit;

        private a(long j10, Object obj) {
            if (obj != null) {
                if (j10 >= 0) {
                    this.amount = j10;
                    this.unit = obj;
                    return;
                }
                throw new IllegalArgumentException("Temporal amount must be positive or zero: " + j10);
            }
            throw new NullPointerException("Missing chronological unit.");
        }

        public static a c(long j10, Object obj) {
            return new a(j10, obj);
        }

        private void readObject(ObjectInputStream objectInputStream) {
            objectInputStream.defaultReadObject();
            if (this.unit != null && this.amount >= 0) {
                return;
            }
            throw new InvalidObjectException("Inconsistent state.");
        }

        public long a() {
            return this.amount;
        }

        public Object b() {
            return this.unit;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof a) {
                a aVar = (a) a.class.cast(obj);
                if (this.amount == aVar.amount && this.unit.equals(aVar.unit)) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            long j10 = this.amount;
            return (this.unit.hashCode() * 29) + ((int) (j10 ^ (j10 >>> 32)));
        }

        public String toString() {
            StringBuilder sb2 = new StringBuilder();
            sb2.append('P');
            sb2.append(this.amount);
            sb2.append('{');
            sb2.append(this.unit);
            sb2.append('}');
            return sb2.toString();
        }
    }

    List a();
}
