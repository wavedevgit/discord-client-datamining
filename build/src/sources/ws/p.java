package ws;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class p {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Object f53016d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Object f53017e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ ws.a f53018i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Object obj, Object obj2, ws.a aVar) {
            super(0);
            this.f53016d = obj;
            this.f53017e = obj2;
            this.f53018i = aVar;
        }

        @Override // kotlin.jvm.functions.Function0
        public final String invoke() {
            return "Attempting to assign conflicting values '" + this.f53016d + "' and '" + this.f53017e + "' to field '" + this.f53018i.getName() + '\'';
        }
    }

    public static final q a(Integer num, Integer num2, Integer num3, ws.a setter, String name, Integer num4) {
        Intrinsics.checkNotNullParameter(setter, "setter");
        Intrinsics.checkNotNullParameter(name, "name");
        List r10 = CollectionsKt.r(d(num, num2, num3, setter, name, true));
        if (num4 != null) {
            r10.add(e(num, num4, num3, setter, name, false, 32, null));
            r10.add(new q(CollectionsKt.o(new r("+"), new h(CollectionsKt.e(new v(Integer.valueOf(num4.intValue() + 1), num2, setter, name, false)))), CollectionsKt.l()));
        } else {
            r10.add(e(num, num2, num3, setter, name, false, 32, null));
        }
        return new q(CollectionsKt.l(), r10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Object c(ws.a aVar, Object obj, Object obj2, int i10, int i11) {
        Object c10 = aVar.c(obj, obj2);
        if (c10 == null) {
            return k.f53010a.b(i11);
        }
        return k.f53010a.a(i10, new a(c10, obj2, aVar));
    }

    public static final q d(Integer num, Integer num2, Integer num3, ws.a setter, String name, boolean z10) {
        int i10;
        int i11;
        int i12;
        Intrinsics.checkNotNullParameter(setter, "setter");
        Intrinsics.checkNotNullParameter(name, "name");
        if (num != null) {
            i10 = num.intValue();
        } else {
            i10 = 1;
        }
        int i13 = i10 + (z10 ? 1 : 0);
        if (num2 != null) {
            i11 = num2.intValue();
            if (z10) {
                i11++;
            }
        } else {
            i11 = Integer.MAX_VALUE;
        }
        if (num3 != null) {
            i12 = num3.intValue();
        } else {
            i12 = 0;
        }
        int min = Math.min(i11, i12);
        if (i13 >= min) {
            return f(z10, setter, name, i13, i11);
        }
        q f10 = f(z10, setter, name, i13, i13);
        while (i13 < min) {
            i13++;
            f10 = new q(CollectionsKt.l(), CollectionsKt.o(f(z10, setter, name, i13, i13), n.b(CollectionsKt.o(new q(CollectionsKt.e(new r(" ")), CollectionsKt.l()), f10))));
        }
        if (i12 > i11) {
            return n.b(CollectionsKt.o(new q(CollectionsKt.e(new r(StringsKt.F(" ", i12 - i11))), CollectionsKt.l()), f10));
        }
        if (i12 == i11) {
            return f10;
        }
        return new q(CollectionsKt.l(), CollectionsKt.o(f(z10, setter, name, i12 + 1, i11), f10));
    }

    public static /* synthetic */ q e(Integer num, Integer num2, Integer num3, ws.a aVar, String str, boolean z10, int i10, Object obj) {
        if ((i10 & 32) != 0) {
            z10 = false;
        }
        return d(num, num2, num3, aVar, str, z10);
    }

    private static final q f(boolean z10, ws.a aVar, String str, int i10, int i11) {
        if (i11 >= (z10 ? 1 : 0) + 1) {
            List c10 = CollectionsKt.c();
            if (z10) {
                c10.add(new r("-"));
            }
            c10.add(new h(CollectionsKt.e(new v(Integer.valueOf(i10 - (z10 ? 1 : 0)), Integer.valueOf(i11 - (z10 ? 1 : 0)), aVar, str, z10))));
            return new q(CollectionsKt.a(c10), CollectionsKt.l());
        }
        throw new IllegalStateException("Check failed.");
    }
}
