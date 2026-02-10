package ut;

import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.webrtc.PeerConnection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f51233a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f51234b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f51235c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f51236d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f51237e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f51238f;

    /* renamed from: g  reason: collision with root package name */
    private final String f51239g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f51240h;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f51241i;

    /* renamed from: j  reason: collision with root package name */
    private final String f51242j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f51243k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f51244l;

    /* renamed from: m  reason: collision with root package name */
    private final boolean f51245m;

    /* renamed from: n  reason: collision with root package name */
    private final boolean f51246n;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f51247o;

    /* renamed from: p  reason: collision with root package name */
    private a f51248p;

    public d(boolean z10, boolean z11, boolean z12, boolean z13, boolean z14, boolean z15, String prettyPrintIndent, boolean z16, boolean z17, String classDiscriminator, boolean z18, boolean z19, u uVar, boolean z20, boolean z21, boolean z22, a classDiscriminatorMode) {
        Intrinsics.checkNotNullParameter(prettyPrintIndent, "prettyPrintIndent");
        Intrinsics.checkNotNullParameter(classDiscriminator, "classDiscriminator");
        Intrinsics.checkNotNullParameter(classDiscriminatorMode, "classDiscriminatorMode");
        this.f51233a = z10;
        this.f51234b = z11;
        this.f51235c = z12;
        this.f51236d = z13;
        this.f51237e = z14;
        this.f51238f = z15;
        this.f51239g = prettyPrintIndent;
        this.f51240h = z16;
        this.f51241i = z17;
        this.f51242j = classDiscriminator;
        this.f51243k = z18;
        this.f51244l = z19;
        this.f51245m = z20;
        this.f51246n = z21;
        this.f51247o = z22;
        this.f51248p = classDiscriminatorMode;
    }

    public final boolean a() {
        return this.f51247o;
    }

    public final boolean b() {
        return this.f51243k;
    }

    public final boolean c() {
        return this.f51236d;
    }

    public final boolean d() {
        return this.f51246n;
    }

    public final String e() {
        return this.f51242j;
    }

    public final a f() {
        return this.f51248p;
    }

    public final boolean g() {
        return this.f51240h;
    }

    public final boolean h() {
        return this.f51245m;
    }

    public final boolean i() {
        return this.f51233a;
    }

    public final boolean j() {
        return this.f51238f;
    }

    public final boolean k() {
        return this.f51234b;
    }

    public final u l() {
        return null;
    }

    public final boolean m() {
        return this.f51237e;
    }

    public final String n() {
        return this.f51239g;
    }

    public final boolean o() {
        return this.f51244l;
    }

    public final boolean p() {
        return this.f51241i;
    }

    public final boolean q() {
        return this.f51235c;
    }

    public String toString() {
        return "JsonConfiguration(encodeDefaults=" + this.f51233a + ", ignoreUnknownKeys=" + this.f51234b + ", isLenient=" + this.f51235c + ", allowStructuredMapKeys=" + this.f51236d + ", prettyPrint=" + this.f51237e + ", explicitNulls=" + this.f51238f + ", prettyPrintIndent='" + this.f51239g + "', coerceInputValues=" + this.f51240h + ", useArrayPolymorphism=" + this.f51241i + ", classDiscriminator='" + this.f51242j + "', allowSpecialFloatingPointValues=" + this.f51243k + ", useAlternativeNames=" + this.f51244l + ", namingStrategy=" + ((Object) null) + ", decodeEnumsCaseInsensitive=" + this.f51245m + ", allowTrailingComma=" + this.f51246n + ", allowComments=" + this.f51247o + ", classDiscriminatorMode=" + this.f51248p + ')';
    }

    public /* synthetic */ d(boolean z10, boolean z11, boolean z12, boolean z13, boolean z14, boolean z15, String str, boolean z16, boolean z17, String str2, boolean z18, boolean z19, u uVar, boolean z20, boolean z21, boolean z22, a aVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? false : z10, (i10 & 2) != 0 ? false : z11, (i10 & 4) != 0 ? false : z12, (i10 & 8) != 0 ? false : z13, (i10 & 16) != 0 ? false : z14, (i10 & 32) != 0 ? true : z15, (i10 & 64) != 0 ? "    " : str, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? false : z16, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? false : z17, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? "type" : str2, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? false : z18, (i10 & RecyclerView.ItemAnimator.FLAG_MOVED) == 0 ? z19 : true, (i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? null : uVar, (i10 & 8192) != 0 ? false : z20, (i10 & 16384) != 0 ? false : z21, (i10 & PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS) != 0 ? false : z22, (i10 & 65536) != 0 ? a.f51225i : aVar);
    }
}
