package mi;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p {

    /* renamed from: a  reason: collision with root package name */
    private final mi.c f37235a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f37236b;

    /* renamed from: c  reason: collision with root package name */
    private final c f37237c;

    /* renamed from: d  reason: collision with root package name */
    private final int f37238d;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ mi.c f37239a;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: mi.p$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public class C0504a extends b {
            C0504a(p pVar, CharSequence charSequence) {
                super(pVar, charSequence);
            }

            @Override // mi.p.b
            int e(int i10) {
                return i10 + 1;
            }

            @Override // mi.p.b
            int f(int i10) {
                return a.this.f37239a.c(this.f37241i, i10);
            }
        }

        a(mi.c cVar) {
            this.f37239a = cVar;
        }

        @Override // mi.p.c
        /* renamed from: b */
        public b a(p pVar, CharSequence charSequence) {
            return new C0504a(pVar, charSequence);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static abstract class b extends mi.a {

        /* renamed from: i  reason: collision with root package name */
        final CharSequence f37241i;

        /* renamed from: o  reason: collision with root package name */
        final mi.c f37242o;

        /* renamed from: p  reason: collision with root package name */
        final boolean f37243p;

        /* renamed from: q  reason: collision with root package name */
        int f37244q = 0;

        /* renamed from: r  reason: collision with root package name */
        int f37245r;

        protected b(p pVar, CharSequence charSequence) {
            this.f37242o = pVar.f37235a;
            this.f37243p = pVar.f37236b;
            this.f37245r = pVar.f37238d;
            this.f37241i = charSequence;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // mi.a
        /* renamed from: d */
        public String a() {
            int f10;
            int i10 = this.f37244q;
            while (true) {
                int i11 = this.f37244q;
                if (i11 != -1) {
                    f10 = f(i11);
                    if (f10 == -1) {
                        f10 = this.f37241i.length();
                        this.f37244q = -1;
                    } else {
                        this.f37244q = e(f10);
                    }
                    int i12 = this.f37244q;
                    if (i12 == i10) {
                        int i13 = i12 + 1;
                        this.f37244q = i13;
                        if (i13 > this.f37241i.length()) {
                            this.f37244q = -1;
                        }
                    } else {
                        while (i10 < f10 && this.f37242o.e(this.f37241i.charAt(i10))) {
                            i10++;
                        }
                        while (f10 > i10 && this.f37242o.e(this.f37241i.charAt(f10 - 1))) {
                            f10--;
                        }
                        if (!this.f37243p || i10 != f10) {
                            break;
                        }
                        i10 = this.f37244q;
                    }
                } else {
                    return (String) b();
                }
            }
            int i14 = this.f37245r;
            if (i14 == 1) {
                f10 = this.f37241i.length();
                this.f37244q = -1;
                while (f10 > i10 && this.f37242o.e(this.f37241i.charAt(f10 - 1))) {
                    f10--;
                }
            } else {
                this.f37245r = i14 - 1;
            }
            return this.f37241i.subSequence(i10, f10).toString();
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
        this(cVar, false, mi.c.f(), Integer.MAX_VALUE);
    }

    public static p d(char c10) {
        return e(mi.c.d(c10));
    }

    public static p e(mi.c cVar) {
        m.j(cVar);
        return new p(new a(cVar));
    }

    private Iterator g(CharSequence charSequence) {
        return this.f37237c.a(this, charSequence);
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

    private p(c cVar, boolean z10, mi.c cVar2, int i10) {
        this.f37237c = cVar;
        this.f37236b = z10;
        this.f37235a = cVar2;
        this.f37238d = i10;
    }
}
