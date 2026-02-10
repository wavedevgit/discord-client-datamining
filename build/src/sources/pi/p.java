package pi;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p {

    /* renamed from: a  reason: collision with root package name */
    private final pi.c f42753a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f42754b;

    /* renamed from: c  reason: collision with root package name */
    private final c f42755c;

    /* renamed from: d  reason: collision with root package name */
    private final int f42756d;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ pi.c f42757a;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: pi.p$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public class C0592a extends b {
            C0592a(p pVar, CharSequence charSequence) {
                super(pVar, charSequence);
            }

            @Override // pi.p.b
            int e(int i10) {
                return i10 + 1;
            }

            @Override // pi.p.b
            int f(int i10) {
                return a.this.f42757a.c(this.f42759i, i10);
            }
        }

        a(pi.c cVar) {
            this.f42757a = cVar;
        }

        @Override // pi.p.c
        /* renamed from: b */
        public b a(p pVar, CharSequence charSequence) {
            return new C0592a(pVar, charSequence);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static abstract class b extends pi.a {

        /* renamed from: i  reason: collision with root package name */
        final CharSequence f42759i;

        /* renamed from: o  reason: collision with root package name */
        final pi.c f42760o;

        /* renamed from: p  reason: collision with root package name */
        final boolean f42761p;

        /* renamed from: q  reason: collision with root package name */
        int f42762q = 0;

        /* renamed from: r  reason: collision with root package name */
        int f42763r;

        protected b(p pVar, CharSequence charSequence) {
            this.f42760o = pVar.f42753a;
            this.f42761p = pVar.f42754b;
            this.f42763r = pVar.f42756d;
            this.f42759i = charSequence;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // pi.a
        /* renamed from: d */
        public String a() {
            int f10;
            int i10 = this.f42762q;
            while (true) {
                int i11 = this.f42762q;
                if (i11 != -1) {
                    f10 = f(i11);
                    if (f10 == -1) {
                        f10 = this.f42759i.length();
                        this.f42762q = -1;
                    } else {
                        this.f42762q = e(f10);
                    }
                    int i12 = this.f42762q;
                    if (i12 == i10) {
                        int i13 = i12 + 1;
                        this.f42762q = i13;
                        if (i13 > this.f42759i.length()) {
                            this.f42762q = -1;
                        }
                    } else {
                        while (i10 < f10 && this.f42760o.e(this.f42759i.charAt(i10))) {
                            i10++;
                        }
                        while (f10 > i10 && this.f42760o.e(this.f42759i.charAt(f10 - 1))) {
                            f10--;
                        }
                        if (!this.f42761p || i10 != f10) {
                            break;
                        }
                        i10 = this.f42762q;
                    }
                } else {
                    return (String) b();
                }
            }
            int i14 = this.f42763r;
            if (i14 == 1) {
                f10 = this.f42759i.length();
                this.f42762q = -1;
                while (f10 > i10 && this.f42760o.e(this.f42759i.charAt(f10 - 1))) {
                    f10--;
                }
            } else {
                this.f42763r = i14 - 1;
            }
            return this.f42759i.subSequence(i10, f10).toString();
        }

        abstract int e(int i10);

        abstract int f(int i10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface c {
        Iterator a(p pVar, CharSequence charSequence);
    }

    private p(c cVar) {
        this(cVar, false, pi.c.f(), Integer.MAX_VALUE);
    }

    public static p d(char c10) {
        return e(pi.c.d(c10));
    }

    public static p e(pi.c cVar) {
        m.j(cVar);
        return new p(new a(cVar));
    }

    private Iterator g(CharSequence charSequence) {
        return this.f42755c.a(this, charSequence);
    }

    public List f(CharSequence charSequence) {
        m.j(charSequence);
        Iterator g10 = g(charSequence);
        ArrayList arrayList = new ArrayList();
        while (g10.hasNext()) {
            arrayList.add((String) g10.next());
        }
        return Collections.unmodifiableList(arrayList);
    }

    private p(c cVar, boolean z10, pi.c cVar2, int i10) {
        this.f42755c = cVar;
        this.f42754b = z10;
        this.f42753a = cVar2;
        this.f42756d = i10;
    }
}
