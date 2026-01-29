package bt;

import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.webrtc.PeerConnection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f7807a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f7808b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f7809c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f7810d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f7811e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f7812f;

    /* renamed from: g  reason: collision with root package name */
    private final String f7813g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f7814h;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f7815i;

    /* renamed from: j  reason: collision with root package name */
    private final String f7816j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f7817k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f7818l;

    /* renamed from: m  reason: collision with root package name */
    private final boolean f7819m;

    /* renamed from: n  reason: collision with root package name */
    private final boolean f7820n;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f7821o;

    /* renamed from: p  reason: collision with root package name */
    private a f7822p;

    public d(boolean z10, boolean z11, boolean z12, boolean z13, boolean z14, boolean z15, String prettyPrintIndent, boolean z16, boolean z17, String classDiscriminator, boolean z18, boolean z19, u uVar, boolean z20, boolean z21, boolean z22, a classDiscriminatorMode) {
        Intrinsics.checkNotNullParameter(prettyPrintIndent, "prettyPrintIndent");
        Intrinsics.checkNotNullParameter(classDiscriminator, "classDiscriminator");
        Intrinsics.checkNotNullParameter(classDiscriminatorMode, "classDiscriminatorMode");
        this.f7807a = z10;
        this.f7808b = z11;
        this.f7809c = z12;
        this.f7810d = z13;
        this.f7811e = z14;
        this.f7812f = z15;
        this.f7813g = prettyPrintIndent;
        this.f7814h = z16;
        this.f7815i = z17;
        this.f7816j = classDiscriminator;
        this.f7817k = z18;
        this.f7818l = z19;
        this.f7819m = z20;
        this.f7820n = z21;
        this.f7821o = z22;
        this.f7822p = classDiscriminatorMode;
    }

    public final boolean a() {
        return this.f7821o;
    }

    public final boolean b() {
        return this.f7817k;
    }

    public final boolean c() {
        return this.f7810d;
    }

    public final boolean d() {
        return this.f7820n;
    }

    public final String e() {
        return this.f7816j;
    }

    public final a f() {
        return this.f7822p;
    }

    public final boolean g() {
        return this.f7814h;
    }

    public final boolean h() {
        return this.f7819m;
    }

    public final boolean i() {
        return this.f7807a;
    }

    public final boolean j() {
        return this.f7812f;
    }

    public final boolean k() {
        return this.f7808b;
    }

    public final u l() {
        return null;
    }

    public final boolean m() {
        return this.f7811e;
    }

    public final String n() {
        return this.f7813g;
    }

    public final boolean o() {
        return this.f7818l;
    }

    public final boolean p() {
        return this.f7815i;
    }

    public final boolean q() {
        return this.f7809c;
    }

    public String toString() {
        return "JsonConfiguration(encodeDefaults=" + this.f7807a + ", ignoreUnknownKeys=" + this.f7808b + ", isLenient=" + this.f7809c + ", allowStructuredMapKeys=" + this.f7810d + ", prettyPrint=" + this.f7811e + ", explicitNulls=" + this.f7812f + ", prettyPrintIndent='" + this.f7813g + "', coerceInputValues=" + this.f7814h + ", useArrayPolymorphism=" + this.f7815i + ", classDiscriminator='" + this.f7816j + "', allowSpecialFloatingPointValues=" + this.f7817k + ", useAlternativeNames=" + this.f7818l + ", namingStrategy=" + ((Object) null) + ", decodeEnumsCaseInsensitive=" + this.f7819m + ", allowTrailingComma=" + this.f7820n + ", allowComments=" + this.f7821o + ", classDiscriminatorMode=" + this.f7822p + ')';
    }

    public /* synthetic */ d(boolean z10, boolean z11, boolean z12, boolean z13, boolean z14, boolean z15, String str, boolean z16, boolean z17, String str2, boolean z18, boolean z19, u uVar, boolean z20, boolean z21, boolean z22, a aVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? false : z10, (i10 & 2) != 0 ? false : z11, (i10 & 4) != 0 ? false : z12, (i10 & 8) != 0 ? false : z13, (i10 & 16) != 0 ? false : z14, (i10 & 32) != 0 ? true : z15, (i10 & 64) != 0 ? "    " : str, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? false : z16, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? false : z17, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? "type" : str2, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? false : z18, (i10 & RecyclerView.ItemAnimator.FLAG_MOVED) == 0 ? z19 : true, (i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? null : uVar, (i10 & 8192) != 0 ? false : z20, (i10 & 16384) != 0 ? false : z21, (i10 & PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS) != 0 ? false : z22, (i10 & 65536) != 0 ? a.f7799i : aVar);
    }
}
