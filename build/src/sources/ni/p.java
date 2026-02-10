package ni;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p {

    /* renamed from: a  reason: collision with root package name */
    private final ni.c f38920a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f38921b;

    /* renamed from: c  reason: collision with root package name */
    private final c f38922c;

    /* renamed from: d  reason: collision with root package name */
    private final int f38923d;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ ni.c f38924a;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: ni.p$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public class C0558a extends b {
            C0558a(p pVar, CharSequence charSequence) {
                super(pVar, charSequence);
            }

            @Override // ni.p.b
            int e(int i10) {
                return i10 + 1;
            }

            @Override // ni.p.b
            int f(int i10) {
                return a.this.f38924a.c(this.f38926i, i10);
            }
        }

        a(ni.c cVar) {
            this.f38924a = cVar;
        }

        @Override // ni.p.c
        /* renamed from: b */
        public b a(p pVar, CharSequence charSequence) {
            return new C0558a(pVar, charSequence);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static abstract class b extends ni.a {

        /* renamed from: i  reason: collision with root package name */
        final CharSequence f38926i;

        /* renamed from: o  reason: collision with root package name */
        final ni.c f38927o;

        /* renamed from: p  reason: collision with root package name */
        final boolean f38928p;

        /* renamed from: q  reason: collision with root package name */
        int f38929q = 0;

        /* renamed from: r  reason: collision with root package name */
        int f38930r;

        protected b(p pVar, CharSequence charSequence) {
            this.f38927o = pVar.f38920a;
            this.f38928p = pVar.f38921b;
            this.f38930r = pVar.f38923d;
            this.f38926i = charSequence;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // ni.a
        /* renamed from: d */
        public String a() {
            int f10;
            int i10 = this.f38929q;
            while (true) {
                int i11 = this.f38929q;
                if (i11 != -1) {
                    f10 = f(i11);
                    if (f10 == -1) {
                        f10 = this.f38926i.length();
                        this.f38929q = -1;
                    } else {
                        this.f38929q = e(f10);
                    }
                    int i12 = this.f38929q;
                    if (i12 == i10) {
                        int i13 = i12 + 1;
                        this.f38929q = i13;
                        if (i13 > this.f38926i.length()) {
                            this.f38929q = -1;
                        }
                    } else {
                        while (i10 < f10 && this.f38927o.e(this.f38926i.charAt(i10))) {
                            i10++;
                        }
                        while (f10 > i10 && this.f38927o.e(this.f38926i.charAt(f10 - 1))) {
                            f10--;
                        }
                        if (!this.f38928p || i10 != f10) {
                            break;
                        }
                        i10 = this.f38929q;
                    }
                } else {
                    return (String) b();
                }
            }
            int i14 = this.f38930r;
            if (i14 == 1) {
                f10 = this.f38926i.length();
                this.f38929q = -1;
                while (f10 > i10 && this.f38927o.e(this.f38926i.charAt(f10 - 1))) {
                    f10--;
                }
            } else {
                this.f38930r = i14 - 1;
            }
            return this.f38926i.subSequence(i10, f10).toString();
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
        this(cVar, false, ni.c.f(), Integer.MAX_VALUE);
    }

    public static p d(char c10) {
        return e(ni.c.d(c10));
    }

    public static p e(ni.c cVar) {
        m.j(cVar);
        return new p(new a(cVar));
    }

    private Iterator g(CharSequence charSequence) {
        return this.f38922c.a(this, charSequence);
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

    private p(c cVar, boolean z10, ni.c cVar2, int i10) {
        this.f38922c = cVar;
        this.f38921b = z10;
        this.f38920a = cVar2;
        this.f38923d = i10;
    }
}
