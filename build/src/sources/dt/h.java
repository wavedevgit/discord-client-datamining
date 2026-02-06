package dt;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.jvm.internal.Ref;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h implements o {

    /* renamed from: a  reason: collision with root package name */
    private final List f21145a;

    /* renamed from: b  reason: collision with root package name */
    private final int f21146b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f21147c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends Lambda implements Function0 {
        a() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        public final String invoke() {
            return "Unexpected end of input: yet to parse " + h.this.d();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class b extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Ref.IntRef f21149d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ h f21150e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(Ref.IntRef intRef, h hVar) {
            super(0);
            this.f21149d = intRef;
            this.f21150e = hVar;
        }

        @Override // kotlin.jvm.functions.Function0
        public final String invoke() {
            return "Only found " + this.f21149d.element + " digits in a row, but need to parse " + this.f21150e.d();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class c extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ String f21151d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ h f21152e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ int f21153i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ g f21154o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(String str, h hVar, int i10, g gVar) {
            super(0);
            this.f21151d = str;
            this.f21152e = hVar;
            this.f21153i = i10;
            this.f21154o = gVar;
        }

        @Override // kotlin.jvm.functions.Function0
        public final String invoke() {
            return "Can not interpret the string '" + this.f21151d + "' as " + ((e) this.f21152e.c().get(this.f21153i)).c() + ": " + this.f21154o.a();
        }
    }

    public h(List consumers) {
        boolean z10;
        int i10;
        boolean z11;
        boolean z12;
        int i11;
        boolean z13;
        boolean z14;
        boolean z15;
        Intrinsics.checkNotNullParameter(consumers, "consumers");
        this.f21145a = consumers;
        Iterator it = consumers.iterator();
        int i12 = 0;
        while (true) {
            int i13 = 1;
            if (!it.hasNext()) {
                break;
            }
            Integer b10 = ((e) it.next()).b();
            if (b10 != null) {
                i13 = b10.intValue();
            }
            i12 += i13;
        }
        this.f21146b = i12;
        List<e> list = this.f21145a;
        if (!(list instanceof Collection) || !list.isEmpty()) {
            for (e eVar : list) {
                if (eVar.b() == null) {
                    z10 = true;
                    break;
                }
            }
        }
        z10 = false;
        this.f21147c = z10;
        List<e> list2 = this.f21145a;
        if (!(list2 instanceof Collection) || !list2.isEmpty()) {
            for (e eVar2 : list2) {
                Integer b11 = eVar2.b();
                if (b11 != null) {
                    i10 = b11.intValue();
                } else {
                    i10 = Integer.MAX_VALUE;
                }
                if (i10 > 0) {
                    z11 = true;
                    continue;
                } else {
                    z11 = false;
                    continue;
                }
                if (!z11) {
                    z12 = false;
                    break;
                }
            }
        }
        z12 = true;
        if (z12) {
            List<e> list3 = this.f21145a;
            if ((list3 instanceof Collection) && list3.isEmpty()) {
                i11 = 0;
            } else {
                i11 = 0;
                for (e eVar3 : list3) {
                    if (eVar3.b() == null) {
                        z13 = true;
                    } else {
                        z13 = false;
                    }
                    if (z13 && (i11 = i11 + 1) < 0) {
                        CollectionsKt.u();
                    }
                }
            }
            if (i11 <= 1) {
                z14 = true;
            } else {
                z14 = false;
            }
            if (!z14) {
                ArrayList<e> arrayList = new ArrayList();
                for (Object obj : this.f21145a) {
                    if (((e) obj).b() == null) {
                        z15 = true;
                    } else {
                        z15 = false;
                    }
                    if (z15) {
                        arrayList.add(obj);
                    }
                }
                ArrayList arrayList2 = new ArrayList(CollectionsKt.w(arrayList, 10));
                for (e eVar4 : arrayList) {
                    arrayList2.add(eVar4.c());
                }
                throw new IllegalArgumentException(("At most one variable-length numeric field in a row is allowed, but got several: " + arrayList2 + ". Parsing is undefined: for example, with variable-length month number and variable-length day of month, '111' can be parsed as Jan 11th or Nov 1st.").toString());
            }
            return;
        }
        throw new IllegalArgumentException("Failed requirement.");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final String d() {
        String str;
        List<e> list = this.f21145a;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (e eVar : list) {
            StringBuilder sb2 = new StringBuilder();
            Integer b10 = eVar.b();
            if (b10 == null) {
                str = "at least one digit";
            } else {
                str = b10 + " digits";
            }
            sb2.append(str);
            sb2.append(" for ");
            sb2.append(eVar.c());
            arrayList.add(sb2.toString());
        }
        if (this.f21147c) {
            return "a number with at least " + this.f21146b + " digits: " + arrayList;
        }
        return "a number with exactly " + this.f21146b + " digits: " + arrayList;
    }

    @Override // dt.o
    public Object a(Object obj, CharSequence input, int i10) {
        int i11;
        Intrinsics.checkNotNullParameter(input, "input");
        if (this.f21146b + i10 > input.length()) {
            return k.f21157a.a(i10, new a());
        }
        Ref.IntRef intRef = new Ref.IntRef();
        while (intRef.element + i10 < input.length() && at.d.b(input.charAt(intRef.element + i10))) {
            intRef.element++;
        }
        if (intRef.element < this.f21146b) {
            return k.f21157a.a(i10, new b(intRef, this));
        }
        int size = this.f21145a.size();
        int i12 = 0;
        while (i12 < size) {
            Integer b10 = ((e) this.f21145a.get(i12)).b();
            if (b10 != null) {
                i11 = b10.intValue();
            } else {
                i11 = (intRef.element - this.f21146b) + 1;
            }
            int i13 = i11 + i10;
            g a10 = ((e) this.f21145a.get(i12)).a(obj, input, i10, i13);
            if (a10 != null) {
                return k.f21157a.a(i10, new c(input.subSequence(i10, i13).toString(), this, i12, a10));
            }
            i12++;
            i10 = i13;
        }
        return k.f21157a.b(i10);
    }

    public final List c() {
        return this.f21145a;
    }

    public String toString() {
        return d();
    }
}
