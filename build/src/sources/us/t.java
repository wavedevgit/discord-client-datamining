package us;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class t extends ws.k {

    /* renamed from: g  reason: collision with root package name */
    public static final a f50995g = new a(null);

    /* renamed from: h  reason: collision with root package name */
    private static final List f50996h = CollectionsKt.o(0, 0, 0, 0, 0, 0, 0, 0, 0);

    /* renamed from: i  reason: collision with root package name */
    private static final List f50997i = CollectionsKt.o(2, 1, 0, 2, 1, 0, 2, 1, 0);

    /* renamed from: e  reason: collision with root package name */
    private final int f50998e;

    /* renamed from: f  reason: collision with root package name */
    private final int f50999f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public /* synthetic */ t(int i10, int i11, List list, int i12, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, i11, (i12 & 4) != 0 ? f50996h : list);
    }

    public boolean equals(Object obj) {
        if (obj instanceof t) {
            t tVar = (t) obj;
            if (this.f50998e == tVar.f50998e && this.f50999f == tVar.f50999f) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        return (this.f50998e * 31) + this.f50999f;
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public t(int i10, int i11, List zerosToAdd) {
        super(l0.f50946a.a(), i10, i11, zerosToAdd);
        Intrinsics.checkNotNullParameter(zerosToAdd, "zerosToAdd");
        this.f50998e = i10;
        this.f50999f = i11;
    }
}
