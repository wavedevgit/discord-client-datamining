package ct;

import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.webrtc.PeerConnection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f20805a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f20806b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f20807c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f20808d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f20809e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f20810f;

    /* renamed from: g  reason: collision with root package name */
    private final String f20811g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f20812h;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f20813i;

    /* renamed from: j  reason: collision with root package name */
    private final String f20814j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f20815k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f20816l;

    /* renamed from: m  reason: collision with root package name */
    private final boolean f20817m;

    /* renamed from: n  reason: collision with root package name */
    private final boolean f20818n;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f20819o;

    /* renamed from: p  reason: collision with root package name */
    private a f20820p;

    public d(boolean z10, boolean z11, boolean z12, boolean z13, boolean z14, boolean z15, String prettyPrintIndent, boolean z16, boolean z17, String classDiscriminator, boolean z18, boolean z19, u uVar, boolean z20, boolean z21, boolean z22, a classDiscriminatorMode) {
        Intrinsics.checkNotNullParameter(prettyPrintIndent, "prettyPrintIndent");
        Intrinsics.checkNotNullParameter(classDiscriminator, "classDiscriminator");
        Intrinsics.checkNotNullParameter(classDiscriminatorMode, "classDiscriminatorMode");
        this.f20805a = z10;
        this.f20806b = z11;
        this.f20807c = z12;
        this.f20808d = z13;
        this.f20809e = z14;
        this.f20810f = z15;
        this.f20811g = prettyPrintIndent;
        this.f20812h = z16;
        this.f20813i = z17;
        this.f20814j = classDiscriminator;
        this.f20815k = z18;
        this.f20816l = z19;
        this.f20817m = z20;
        this.f20818n = z21;
        this.f20819o = z22;
        this.f20820p = classDiscriminatorMode;
    }

    public final boolean a() {
        return this.f20819o;
    }

    public final boolean b() {
        return this.f20815k;
    }

    public final boolean c() {
        return this.f20808d;
    }

    public final boolean d() {
        return this.f20818n;
    }

    public final String e() {
        return this.f20814j;
    }

    public final a f() {
        return this.f20820p;
    }

    public final boolean g() {
        return this.f20812h;
    }

    public final boolean h() {
        return this.f20817m;
    }

    public final boolean i() {
        return this.f20805a;
    }

    public final boolean j() {
        return this.f20810f;
    }

    public final boolean k() {
        return this.f20806b;
    }

    public final u l() {
        return null;
    }

    public final boolean m() {
        return this.f20809e;
    }

    public final String n() {
        return this.f20811g;
    }

    public final boolean o() {
        return this.f20816l;
    }

    public final boolean p() {
        return this.f20813i;
    }

    public final boolean q() {
        return this.f20807c;
    }

    public String toString() {
        return "JsonConfiguration(encodeDefaults=" + this.f20805a + ", ignoreUnknownKeys=" + this.f20806b + ", isLenient=" + this.f20807c + ", allowStructuredMapKeys=" + this.f20808d + ", prettyPrint=" + this.f20809e + ", explicitNulls=" + this.f20810f + ", prettyPrintIndent='" + this.f20811g + "', coerceInputValues=" + this.f20812h + ", useArrayPolymorphism=" + this.f20813i + ", classDiscriminator='" + this.f20814j + "', allowSpecialFloatingPointValues=" + this.f20815k + ", useAlternativeNames=" + this.f20816l + ", namingStrategy=" + ((Object) null) + ", decodeEnumsCaseInsensitive=" + this.f20817m + ", allowTrailingComma=" + this.f20818n + ", allowComments=" + this.f20819o + ", classDiscriminatorMode=" + this.f20820p + ')';
    }

    public /* synthetic */ d(boolean z10, boolean z11, boolean z12, boolean z13, boolean z14, boolean z15, String str, boolean z16, boolean z17, String str2, boolean z18, boolean z19, u uVar, boolean z20, boolean z21, boolean z22, a aVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? false : z10, (i10 & 2) != 0 ? false : z11, (i10 & 4) != 0 ? false : z12, (i10 & 8) != 0 ? false : z13, (i10 & 16) != 0 ? false : z14, (i10 & 32) != 0 ? true : z15, (i10 & 64) != 0 ? "    " : str, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? false : z16, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? false : z17, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? "type" : str2, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? false : z18, (i10 & RecyclerView.ItemAnimator.FLAG_MOVED) == 0 ? z19 : true, (i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? null : uVar, (i10 & 8192) != 0 ? false : z20, (i10 & 16384) != 0 ? false : z21, (i10 & PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS) != 0 ? false : z22, (i10 & 65536) != 0 ? a.f20797i : aVar);
    }
}
