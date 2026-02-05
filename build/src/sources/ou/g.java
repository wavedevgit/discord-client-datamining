package ou;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.ArrayList;
import java.util.Map;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f44499a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f44500b;

    /* renamed from: c  reason: collision with root package name */
    private final c0 f44501c;

    /* renamed from: d  reason: collision with root package name */
    private final Long f44502d;

    /* renamed from: e  reason: collision with root package name */
    private final Long f44503e;

    /* renamed from: f  reason: collision with root package name */
    private final Long f44504f;

    /* renamed from: g  reason: collision with root package name */
    private final Long f44505g;

    /* renamed from: h  reason: collision with root package name */
    private final Map f44506h;

    public g(boolean z10, boolean z11, c0 c0Var, Long l10, Long l11, Long l12, Long l13, Map extras) {
        Intrinsics.checkNotNullParameter(extras, "extras");
        this.f44499a = z10;
        this.f44500b = z11;
        this.f44501c = c0Var;
        this.f44502d = l10;
        this.f44503e = l11;
        this.f44504f = l12;
        this.f44505g = l13;
        this.f44506h = o0.w(extras);
    }

    public static /* synthetic */ g b(g gVar, boolean z10, boolean z11, c0 c0Var, Long l10, Long l11, Long l12, Long l13, Map map, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            z10 = gVar.f44499a;
        }
        if ((i10 & 2) != 0) {
            z11 = gVar.f44500b;
        }
        if ((i10 & 4) != 0) {
            c0Var = gVar.f44501c;
        }
        if ((i10 & 8) != 0) {
            l10 = gVar.f44502d;
        }
        if ((i10 & 16) != 0) {
            l11 = gVar.f44503e;
        }
        if ((i10 & 32) != 0) {
            l12 = gVar.f44504f;
        }
        if ((i10 & 64) != 0) {
            l13 = gVar.f44505g;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            map = gVar.f44506h;
        }
        Long l14 = l13;
        Map map2 = map;
        Long l15 = l11;
        Long l16 = l12;
        return gVar.a(z10, z11, c0Var, l10, l15, l16, l14, map2);
    }

    public final g a(boolean z10, boolean z11, c0 c0Var, Long l10, Long l11, Long l12, Long l13, Map extras) {
        Intrinsics.checkNotNullParameter(extras, "extras");
        return new g(z10, z11, c0Var, l10, l11, l12, l13, extras);
    }

    public final Long c() {
        return this.f44502d;
    }

    public final c0 d() {
        return this.f44501c;
    }

    public final boolean e() {
        return this.f44500b;
    }

    public String toString() {
        ArrayList arrayList = new ArrayList();
        if (this.f44499a) {
            arrayList.add("isRegularFile");
        }
        if (this.f44500b) {
            arrayList.add("isDirectory");
        }
        if (this.f44502d != null) {
            arrayList.add("byteCount=" + this.f44502d);
        }
        if (this.f44503e != null) {
            arrayList.add("createdAt=" + this.f44503e);
        }
        if (this.f44504f != null) {
            arrayList.add("lastModifiedAt=" + this.f44504f);
        }
        if (this.f44505g != null) {
            arrayList.add("lastAccessedAt=" + this.f44505g);
        }
        if (!this.f44506h.isEmpty()) {
            arrayList.add("extras=" + this.f44506h);
        }
        return CollectionsKt.x0(arrayList, ", ", "FileMetadata(", ")", 0, null, null, 56, null);
    }

    public /* synthetic */ g(boolean z10, boolean z11, c0 c0Var, Long l10, Long l11, Long l12, Long l13, Map map, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? false : z10, (i10 & 2) != 0 ? false : z11, (i10 & 4) != 0 ? null : c0Var, (i10 & 8) != 0 ? null : l10, (i10 & 16) != 0 ? null : l11, (i10 & 32) != 0 ? null : l12, (i10 & 64) != 0 ? null : l13, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? o0.i() : map);
    }
}
