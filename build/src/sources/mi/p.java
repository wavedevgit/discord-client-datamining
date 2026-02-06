package mi;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p {

    /* renamed from: a  reason: collision with root package name */
    private final mi.c f37187a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f37188b;

    /* renamed from: c  reason: collision with root package name */
    private final c f37189c;

    /* renamed from: d  reason: collision with root package name */
    private final int f37190d;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ mi.c f37191a;

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
                return a.this.f37191a.c(this.f37193i, i10);
            }
        }

        a(mi.c cVar) {
            this.f37191a = cVar;
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
        final CharSequence f37193i;

        /* renamed from: o  reason: collision with root package name */
        final mi.c f37194o;

        /* renamed from: p  reason: collision with root package name */
        final boolean f37195p;

        /* renamed from: q  reason: collision with root package name */
        int f37196q = 0;

        /* renamed from: r  reason: collision with root package name */
        int f37197r;

        protected b(p pVar, CharSequence charSequence) {
            this.f37194o = pVar.f37187a;
            this.f37195p = pVar.f37188b;
            this.f37197r = pVar.f37190d;
            this.f37193i = charSequence;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // mi.a
        /* renamed from: d */
        public String a() {
            int f10;
            int i10 = this.f37196q;
            while (true) {
                int i11 = this.f37196q;
                if (i11 != -1) {
                    f10 = f(i11);
                    if (f10 == -1) {
                        f10 = this.f37193i.length();
                        this.f37196q = -1;
                    } else {
                        this.f37196q = e(f10);
                    }
                    int i12 = this.f37196q;
                    if (i12 == i10) {
                        int i13 = i12 + 1;
                        this.f37196q = i13;
                        if (i13 > this.f37193i.length()) {
                            this.f37196q = -1;
                        }
                    } else {
                        while (i10 < f10 && this.f37194o.e(this.f37193i.charAt(i10))) {
                            i10++;
                        }
                        while (f10 > i10 && this.f37194o.e(this.f37193i.charAt(f10 - 1))) {
                            f10--;
                        }
                        if (!this.f37195p || i10 != f10) {
                            break;
                        }
                        i10 = this.f37196q;
                    }
                } else {
                    return (String) b();
                }
            }
            int i14 = this.f37197r;
            if (i14 == 1) {
                f10 = this.f37193i.length();
                this.f37196q = -1;
                while (f10 > i10 && this.f37194o.e(this.f37193i.charAt(f10 - 1))) {
                    f10--;
                }
            } else {
                this.f37197r = i14 - 1;
            }
            return this.f37193i.subSequence(i10, f10).toString();
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
        return this.f37189c.a(this, charSequence);
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
        this.f37189c = cVar;
        this.f37188b = z10;
        this.f37187a = cVar2;
        this.f37190d = i10;
    }
}
