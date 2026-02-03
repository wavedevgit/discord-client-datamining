package qa;

import java.util.Collections;
import java.util.List;
import o8.j;
import sa.n;
import sa.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class g implements e {

    /* renamed from: a  reason: collision with root package name */
    private final b f47469a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static class a implements b {
        @Override // qa.g.b
        public List a() {
            return Collections.EMPTY_LIST;
        }

        @Override // qa.g.b
        public int b() {
            return 0;
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {
        List a();

        int b();
    }

    public g() {
        this(new a());
    }

    @Override // qa.e
    public int a(int i10) {
        List a10 = this.f47469a.a();
        if (a10 != null && !a10.isEmpty()) {
            for (int i11 = 0; i11 < a10.size(); i11++) {
                if (((Integer) a10.get(i11)).intValue() > i10) {
                    return ((Integer) a10.get(i11)).intValue();
                }
            }
            return Integer.MAX_VALUE;
        }
        return i10 + 1;
    }

    @Override // qa.e
    public o b(int i10) {
        boolean z10;
        if (i10 >= this.f47469a.b()) {
            z10 = true;
        } else {
            z10 = false;
        }
        return n.d(i10, z10, false);
    }

    @Override // qa.e
    public boolean c() {
        return true;
    }

    public g(b bVar) {
        this.f47469a = (b) j.g(bVar);
    }
}
