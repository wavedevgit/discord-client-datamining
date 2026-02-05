package ht;

import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.webrtc.PeerConnection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f26963a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f26964b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f26965c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f26966d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f26967e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f26968f;

    /* renamed from: g  reason: collision with root package name */
    private final String f26969g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f26970h;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f26971i;

    /* renamed from: j  reason: collision with root package name */
    private final String f26972j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f26973k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f26974l;

    /* renamed from: m  reason: collision with root package name */
    private final boolean f26975m;

    /* renamed from: n  reason: collision with root package name */
    private final boolean f26976n;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f26977o;

    /* renamed from: p  reason: collision with root package name */
    private a f26978p;

    public d(boolean z10, boolean z11, boolean z12, boolean z13, boolean z14, boolean z15, String prettyPrintIndent, boolean z16, boolean z17, String classDiscriminator, boolean z18, boolean z19, u uVar, boolean z20, boolean z21, boolean z22, a classDiscriminatorMode) {
        Intrinsics.checkNotNullParameter(prettyPrintIndent, "prettyPrintIndent");
        Intrinsics.checkNotNullParameter(classDiscriminator, "classDiscriminator");
        Intrinsics.checkNotNullParameter(classDiscriminatorMode, "classDiscriminatorMode");
        this.f26963a = z10;
        this.f26964b = z11;
        this.f26965c = z12;
        this.f26966d = z13;
        this.f26967e = z14;
        this.f26968f = z15;
        this.f26969g = prettyPrintIndent;
        this.f26970h = z16;
        this.f26971i = z17;
        this.f26972j = classDiscriminator;
        this.f26973k = z18;
        this.f26974l = z19;
        this.f26975m = z20;
        this.f26976n = z21;
        this.f26977o = z22;
        this.f26978p = classDiscriminatorMode;
    }

    public final boolean a() {
        return this.f26977o;
    }

    public final boolean b() {
        return this.f26973k;
    }

    public final boolean c() {
        return this.f26966d;
    }

    public final boolean d() {
        return this.f26976n;
    }

    public final String e() {
        return this.f26972j;
    }

    public final a f() {
        return this.f26978p;
    }

    public final boolean g() {
        return this.f26970h;
    }

    public final boolean h() {
        return this.f26975m;
    }

    public final boolean i() {
        return this.f26963a;
    }

    public final boolean j() {
        return this.f26968f;
    }

    public final boolean k() {
        return this.f26964b;
    }

    public final u l() {
        return null;
    }

    public final boolean m() {
        return this.f26967e;
    }

    public final String n() {
        return this.f26969g;
    }

    public final boolean o() {
        return this.f26974l;
    }

    public final boolean p() {
        return this.f26971i;
    }

    public final boolean q() {
        return this.f26965c;
    }

    public String toString() {
        return "JsonConfiguration(encodeDefaults=" + this.f26963a + ", ignoreUnknownKeys=" + this.f26964b + ", isLenient=" + this.f26965c + ", allowStructuredMapKeys=" + this.f26966d + ", prettyPrint=" + this.f26967e + ", explicitNulls=" + this.f26968f + ", prettyPrintIndent='" + this.f26969g + "', coerceInputValues=" + this.f26970h + ", useArrayPolymorphism=" + this.f26971i + ", classDiscriminator='" + this.f26972j + "', allowSpecialFloatingPointValues=" + this.f26973k + ", useAlternativeNames=" + this.f26974l + ", namingStrategy=" + ((Object) null) + ", decodeEnumsCaseInsensitive=" + this.f26975m + ", allowTrailingComma=" + this.f26976n + ", allowComments=" + this.f26977o + ", classDiscriminatorMode=" + this.f26978p + ')';
    }

    public /* synthetic */ d(boolean z10, boolean z11, boolean z12, boolean z13, boolean z14, boolean z15, String str, boolean z16, boolean z17, String str2, boolean z18, boolean z19, u uVar, boolean z20, boolean z21, boolean z22, a aVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? false : z10, (i10 & 2) != 0 ? false : z11, (i10 & 4) != 0 ? false : z12, (i10 & 8) != 0 ? false : z13, (i10 & 16) != 0 ? false : z14, (i10 & 32) != 0 ? true : z15, (i10 & 64) != 0 ? "    " : str, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? false : z16, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? false : z17, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? "type" : str2, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? false : z18, (i10 & RecyclerView.ItemAnimator.FLAG_MOVED) == 0 ? z19 : true, (i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? null : uVar, (i10 & 8192) != 0 ? false : z20, (i10 & 16384) != 0 ? false : z21, (i10 & PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS) != 0 ? false : z22, (i10 & 65536) != 0 ? a.f26955i : aVar);
    }
}
