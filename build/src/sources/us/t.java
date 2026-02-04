package us;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class t extends ws.k {

    /* renamed from: g  reason: collision with root package name */
    public static final a f50992g = new a(null);

    /* renamed from: h  reason: collision with root package name */
    private static final List f50993h = CollectionsKt.o(0, 0, 0, 0, 0, 0, 0, 0, 0);

    /* renamed from: i  reason: collision with root package name */
    private static final List f50994i = CollectionsKt.o(2, 1, 0, 2, 1, 0, 2, 1, 0);

    /* renamed from: e  reason: collision with root package name */
    private final int f50995e;

    /* renamed from: f  reason: collision with root package name */
    private final int f50996f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public /* synthetic */ t(int i10, int i11, List list, int i12, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, i11, (i12 & 4) != 0 ? f50993h : list);
    }

    public boolean equals(Object obj) {
        if (obj instanceof t) {
            t tVar = (t) obj;
            if (this.f50995e == tVar.f50995e && this.f50996f == tVar.f50996f) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        return (this.f50995e * 31) + this.f50996f;
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public t(int i10, int i11, List zerosToAdd) {
        super(l0.f50943a.a(), i10, i11, zerosToAdd);
        Intrinsics.checkNotNullParameter(zerosToAdd, "zerosToAdd");
        this.f50995e = i10;
        this.f50996f = i11;
    }
}
