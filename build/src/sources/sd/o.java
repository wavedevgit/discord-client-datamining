package sd;

import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface o {

    /* renamed from: a  reason: collision with root package name */
    public static final o f49462a = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements o {
        a() {
        }

        @Override // sd.o
        public long a() {
            throw new NoSuchElementException();
        }

        @Override // sd.o
        public long b() {
            throw new NoSuchElementException();
        }

        @Override // sd.o
        public boolean next() {
            return false;
        }
    }

    long a();

    long b();

    boolean next();
}
