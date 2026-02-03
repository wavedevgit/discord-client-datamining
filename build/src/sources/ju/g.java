package ju;

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
    private final boolean f32353a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f32354b;

    /* renamed from: c  reason: collision with root package name */
    private final c0 f32355c;

    /* renamed from: d  reason: collision with root package name */
    private final Long f32356d;

    /* renamed from: e  reason: collision with root package name */
    private final Long f32357e;

    /* renamed from: f  reason: collision with root package name */
    private final Long f32358f;

    /* renamed from: g  reason: collision with root package name */
    private final Long f32359g;

    /* renamed from: h  reason: collision with root package name */
    private final Map f32360h;

    public g(boolean z10, boolean z11, c0 c0Var, Long l10, Long l11, Long l12, Long l13, Map extras) {
        Intrinsics.checkNotNullParameter(extras, "extras");
        this.f32353a = z10;
        this.f32354b = z11;
        this.f32355c = c0Var;
        this.f32356d = l10;
        this.f32357e = l11;
        this.f32358f = l12;
        this.f32359g = l13;
        this.f32360h = o0.w(extras);
    }

    public static /* synthetic */ g b(g gVar, boolean z10, boolean z11, c0 c0Var, Long l10, Long l11, Long l12, Long l13, Map map, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            z10 = gVar.f32353a;
        }
        if ((i10 & 2) != 0) {
            z11 = gVar.f32354b;
        }
        if ((i10 & 4) != 0) {
            c0Var = gVar.f32355c;
        }
        if ((i10 & 8) != 0) {
            l10 = gVar.f32356d;
        }
        if ((i10 & 16) != 0) {
            l11 = gVar.f32357e;
        }
        if ((i10 & 32) != 0) {
            l12 = gVar.f32358f;
        }
        if ((i10 & 64) != 0) {
            l13 = gVar.f32359g;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            map = gVar.f32360h;
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
        return this.f32356d;
    }

    public final c0 d() {
        return this.f32355c;
    }

    public final boolean e() {
        return this.f32354b;
    }

    public String toString() {
        ArrayList arrayList = new ArrayList();
        if (this.f32353a) {
            arrayList.add("isRegularFile");
        }
        if (this.f32354b) {
            arrayList.add("isDirectory");
        }
        if (this.f32356d != null) {
            arrayList.add("byteCount=" + this.f32356d);
        }
        if (this.f32357e != null) {
            arrayList.add("createdAt=" + this.f32357e);
        }
        if (this.f32358f != null) {
            arrayList.add("lastModifiedAt=" + this.f32358f);
        }
        if (this.f32359g != null) {
            arrayList.add("lastAccessedAt=" + this.f32359g);
        }
        if (!this.f32360h.isEmpty()) {
            arrayList.add("extras=" + this.f32360h);
        }
        return CollectionsKt.x0(arrayList, ", ", "FileMetadata(", ")", 0, null, null, 56, null);
    }

    public /* synthetic */ g(boolean z10, boolean z11, c0 c0Var, Long l10, Long l11, Long l12, Long l13, Map map, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? false : z10, (i10 & 2) != 0 ? false : z11, (i10 & 4) != 0 ? null : c0Var, (i10 & 8) != 0 ? null : l10, (i10 & 16) != 0 ? null : l11, (i10 & 32) != 0 ? null : l12, (i10 & 64) != 0 ? null : l13, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? o0.i() : map);
    }
}
