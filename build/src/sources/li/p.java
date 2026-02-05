package li;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p {

    /* renamed from: a  reason: collision with root package name */
    private final li.c f36898a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f36899b;

    /* renamed from: c  reason: collision with root package name */
    private final c f36900c;

    /* renamed from: d  reason: collision with root package name */
    private final int f36901d;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ li.c f36902a;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: li.p$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public class C0482a extends b {
            C0482a(p pVar, CharSequence charSequence) {
                super(pVar, charSequence);
            }

            @Override // li.p.b
            int e(int i10) {
                return i10 + 1;
            }

            @Override // li.p.b
            int f(int i10) {
                return a.this.f36902a.c(this.f36904i, i10);
            }
        }

        a(li.c cVar) {
            this.f36902a = cVar;
        }

        @Override // li.p.c
        /* renamed from: b */
        public b a(p pVar, CharSequence charSequence) {
            return new C0482a(pVar, charSequence);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static abstract class b extends li.a {

        /* renamed from: i  reason: collision with root package name */
        final CharSequence f36904i;

        /* renamed from: o  reason: collision with root package name */
        final li.c f36905o;

        /* renamed from: p  reason: collision with root package name */
        final boolean f36906p;

        /* renamed from: q  reason: collision with root package name */
        int f36907q = 0;

        /* renamed from: r  reason: collision with root package name */
        int f36908r;

        protected b(p pVar, CharSequence charSequence) {
            this.f36905o = pVar.f36898a;
            this.f36906p = pVar.f36899b;
            this.f36908r = pVar.f36901d;
            this.f36904i = charSequence;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // li.a
        /* renamed from: d */
        public String a() {
            int f10;
            int i10 = this.f36907q;
            while (true) {
                int i11 = this.f36907q;
                if (i11 != -1) {
                    f10 = f(i11);
                    if (f10 == -1) {
                        f10 = this.f36904i.length();
                        this.f36907q = -1;
                    } else {
                        this.f36907q = e(f10);
                    }
                    int i12 = this.f36907q;
                    if (i12 == i10) {
                        int i13 = i12 + 1;
                        this.f36907q = i13;
                        if (i13 > this.f36904i.length()) {
                            this.f36907q = -1;
                        }
                    } else {
                        while (i10 < f10 && this.f36905o.e(this.f36904i.charAt(i10))) {
                            i10++;
                        }
                        while (f10 > i10 && this.f36905o.e(this.f36904i.charAt(f10 - 1))) {
                            f10--;
                        }
                        if (!this.f36906p || i10 != f10) {
                            break;
                        }
                        i10 = this.f36907q;
                    }
                } else {
                    return (String) b();
                }
            }
            int i14 = this.f36908r;
            if (i14 == 1) {
                f10 = this.f36904i.length();
                this.f36907q = -1;
                while (f10 > i10 && this.f36905o.e(this.f36904i.charAt(f10 - 1))) {
                    f10--;
                }
            } else {
                this.f36908r = i14 - 1;
            }
            return this.f36904i.subSequence(i10, f10).toString();
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
        this(cVar, false, li.c.f(), Integer.MAX_VALUE);
    }

    public static p d(char c10) {
        return e(li.c.d(c10));
    }

    public static p e(li.c cVar) {
        m.j(cVar);
        return new p(new a(cVar));
    }

    private Iterator g(CharSequence charSequence) {
        return this.f36900c.a(this, charSequence);
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

    private p(c cVar, boolean z10, li.c cVar2, int i10) {
        this.f36900c = cVar;
        this.f36899b = z10;
        this.f36898a = cVar2;
        this.f36901d = i10;
    }
}
