package ii;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p {

    /* renamed from: a  reason: collision with root package name */
    private final ii.c f28537a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f28538b;

    /* renamed from: c  reason: collision with root package name */
    private final c f28539c;

    /* renamed from: d  reason: collision with root package name */
    private final int f28540d;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ ii.c f28541a;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: ii.p$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public class C0376a extends b {
            C0376a(p pVar, CharSequence charSequence) {
                super(pVar, charSequence);
            }

            @Override // ii.p.b
            int e(int i10) {
                return i10 + 1;
            }

            @Override // ii.p.b
            int f(int i10) {
                return a.this.f28541a.c(this.f28543i, i10);
            }
        }

        a(ii.c cVar) {
            this.f28541a = cVar;
        }

        @Override // ii.p.c
        /* renamed from: b */
        public b a(p pVar, CharSequence charSequence) {
            return new C0376a(pVar, charSequence);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static abstract class b extends ii.a {

        /* renamed from: i  reason: collision with root package name */
        final CharSequence f28543i;

        /* renamed from: o  reason: collision with root package name */
        final ii.c f28544o;

        /* renamed from: p  reason: collision with root package name */
        final boolean f28545p;

        /* renamed from: q  reason: collision with root package name */
        int f28546q = 0;

        /* renamed from: r  reason: collision with root package name */
        int f28547r;

        protected b(p pVar, CharSequence charSequence) {
            this.f28544o = pVar.f28537a;
            this.f28545p = pVar.f28538b;
            this.f28547r = pVar.f28540d;
            this.f28543i = charSequence;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // ii.a
        /* renamed from: d */
        public String a() {
            int f10;
            int i10 = this.f28546q;
            while (true) {
                int i11 = this.f28546q;
                if (i11 != -1) {
                    f10 = f(i11);
                    if (f10 == -1) {
                        f10 = this.f28543i.length();
                        this.f28546q = -1;
                    } else {
                        this.f28546q = e(f10);
                    }
                    int i12 = this.f28546q;
                    if (i12 == i10) {
                        int i13 = i12 + 1;
                        this.f28546q = i13;
                        if (i13 > this.f28543i.length()) {
                            this.f28546q = -1;
                        }
                    } else {
                        while (i10 < f10 && this.f28544o.e(this.f28543i.charAt(i10))) {
                            i10++;
                        }
                        while (f10 > i10 && this.f28544o.e(this.f28543i.charAt(f10 - 1))) {
                            f10--;
                        }
                        if (!this.f28545p || i10 != f10) {
                            break;
                        }
                        i10 = this.f28546q;
                    }
                } else {
                    return (String) b();
                }
            }
            int i14 = this.f28547r;
            if (i14 == 1) {
                f10 = this.f28543i.length();
                this.f28546q = -1;
                while (f10 > i10 && this.f28544o.e(this.f28543i.charAt(f10 - 1))) {
                    f10--;
                }
            } else {
                this.f28547r = i14 - 1;
            }
            return this.f28543i.subSequence(i10, f10).toString();
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
        this(cVar, false, ii.c.f(), Integer.MAX_VALUE);
    }

    public static p d(char c10) {
        return e(ii.c.d(c10));
    }

    public static p e(ii.c cVar) {
        m.j(cVar);
        return new p(new a(cVar));
    }

    private Iterator g(CharSequence charSequence) {
        return this.f28539c.a(this, charSequence);
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

    private p(c cVar, boolean z10, ii.c cVar2, int i10) {
        this.f28539c = cVar;
        this.f28538b = z10;
        this.f28537a = cVar2;
        this.f28540d = i10;
    }
}
