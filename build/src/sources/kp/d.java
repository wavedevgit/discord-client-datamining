package kp;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.Map;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final String f35699a;

    /* renamed from: b  reason: collision with root package name */
    private final String f35700b;

    /* renamed from: c  reason: collision with root package name */
    private final String f35701c;

    /* renamed from: d  reason: collision with root package name */
    private final String f35702d;

    /* renamed from: e  reason: collision with root package name */
    private final ep.f f35703e;

    /* renamed from: f  reason: collision with root package name */
    private final String f35704f;

    /* renamed from: g  reason: collision with root package name */
    private final String f35705g;

    /* renamed from: h  reason: collision with root package name */
    private final String f35706h;

    /* renamed from: i  reason: collision with root package name */
    private final String f35707i;

    /* renamed from: j  reason: collision with root package name */
    private final Map f35708j;

    /* renamed from: k  reason: collision with root package name */
    private final String f35709k;

    public d(String str, String str2, String str3, String str4, ep.f environment, String str5, String str6, String str7, String str8, Map map, String str9) {
        Intrinsics.checkNotNullParameter(environment, "environment");
        this.f35699a = str;
        this.f35700b = str2;
        this.f35701c = str3;
        this.f35702d = str4;
        this.f35703e = environment;
        this.f35704f = str5;
        this.f35705g = str6;
        this.f35706h = str7;
        this.f35707i = str8;
        this.f35708j = map;
        this.f35709k = str9;
    }

    public final String a() {
        return this.f35705g;
    }

    public final ep.f b() {
        return this.f35703e;
    }

    public final String c() {
        return this.f35704f;
    }

    public final Map d() {
        return this.f35708j;
    }

    public final String e() {
        return this.f35701c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof d)) {
            return false;
        }
        d dVar = (d) obj;
        if (Intrinsics.areEqual(this.f35699a, dVar.f35699a) && Intrinsics.areEqual(this.f35700b, dVar.f35700b) && Intrinsics.areEqual(this.f35701c, dVar.f35701c) && Intrinsics.areEqual(this.f35702d, dVar.f35702d) && this.f35703e == dVar.f35703e && Intrinsics.areEqual(this.f35704f, dVar.f35704f) && Intrinsics.areEqual(this.f35705g, dVar.f35705g) && Intrinsics.areEqual(this.f35706h, dVar.f35706h) && Intrinsics.areEqual(this.f35707i, dVar.f35707i) && Intrinsics.areEqual(this.f35708j, dVar.f35708j) && Intrinsics.areEqual(this.f35709k, dVar.f35709k)) {
            return true;
        }
        return false;
    }

    public final String f() {
        return this.f35706h;
    }

    public final String g() {
        return this.f35702d;
    }

    public final String h() {
        return this.f35699a;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        int hashCode4;
        int hashCode5;
        int hashCode6;
        int hashCode7;
        int hashCode8;
        int hashCode9;
        String str = this.f35699a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int i11 = hashCode * 31;
        String str2 = this.f35700b;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        String str3 = this.f35701c;
        if (str3 == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str3.hashCode();
        }
        int i13 = (i12 + hashCode3) * 31;
        String str4 = this.f35702d;
        if (str4 == null) {
            hashCode4 = 0;
        } else {
            hashCode4 = str4.hashCode();
        }
        int hashCode10 = (((i13 + hashCode4) * 31) + this.f35703e.hashCode()) * 31;
        String str5 = this.f35704f;
        if (str5 == null) {
            hashCode5 = 0;
        } else {
            hashCode5 = str5.hashCode();
        }
        int i14 = (hashCode10 + hashCode5) * 31;
        String str6 = this.f35705g;
        if (str6 == null) {
            hashCode6 = 0;
        } else {
            hashCode6 = str6.hashCode();
        }
        int i15 = (i14 + hashCode6) * 31;
        String str7 = this.f35706h;
        if (str7 == null) {
            hashCode7 = 0;
        } else {
            hashCode7 = str7.hashCode();
        }
        int i16 = (i15 + hashCode7) * 31;
        String str8 = this.f35707i;
        if (str8 == null) {
            hashCode8 = 0;
        } else {
            hashCode8 = str8.hashCode();
        }
        int i17 = (i16 + hashCode8) * 31;
        Map map = this.f35708j;
        if (map == null) {
            hashCode9 = 0;
        } else {
            hashCode9 = map.hashCode();
        }
        int i18 = (i17 + hashCode9) * 31;
        String str9 = this.f35709k;
        if (str9 != null) {
            i10 = str9.hashCode();
        }
        return i18 + i10;
    }

    public final String i() {
        return this.f35700b;
    }

    public final String j() {
        return this.f35709k;
    }

    public String toString() {
        String str = this.f35699a;
        String str2 = this.f35700b;
        String str3 = this.f35701c;
        String str4 = this.f35702d;
        ep.f fVar = this.f35703e;
        String str5 = this.f35704f;
        String str6 = this.f35705g;
        String str7 = this.f35706h;
        String str8 = this.f35707i;
        Map map = this.f35708j;
        String str9 = this.f35709k;
        return "InquiryAttributes(templateId=" + str + ", templateVersion=" + str2 + ", inquiryId=" + str3 + ", sessionToken=" + str4 + ", environment=" + fVar + ", environmentId=" + str5 + ", accountId=" + str6 + ", referenceId=" + str7 + ", note=" + str8 + ", fields=" + map + ", themeSetId=" + str9 + ")";
    }

    public /* synthetic */ d(String str, String str2, String str3, String str4, ep.f fVar, String str5, String str6, String str7, String str8, Map map, String str9, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : str, (i10 & 2) != 0 ? null : str2, (i10 & 4) != 0 ? null : str3, (i10 & 8) != 0 ? null : str4, fVar, (i10 & 32) != 0 ? null : str5, (i10 & 64) != 0 ? null : str6, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str7, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : str8, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : map, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : str9);
    }
}
