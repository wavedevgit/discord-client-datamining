package td;

import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface o {

    /* renamed from: a  reason: collision with root package name */
    public static final o f48751a = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements o {
        a() {
        }

        @Override // td.o
        public long a() {
            throw new NoSuchElementException();
        }

        @Override // td.o
        public long b() {
            throw new NoSuchElementException();
        }

        @Override // td.o
        public boolean next() {
            return false;
        }
    }

    long a();

    long b();

    boolean next();
}
