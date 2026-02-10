package bp;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.Map;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final String f7173a;

    /* renamed from: b  reason: collision with root package name */
    private final String f7174b;

    /* renamed from: c  reason: collision with root package name */
    private final String f7175c;

    /* renamed from: d  reason: collision with root package name */
    private final String f7176d;

    /* renamed from: e  reason: collision with root package name */
    private final vo.f f7177e;

    /* renamed from: f  reason: collision with root package name */
    private final String f7178f;

    /* renamed from: g  reason: collision with root package name */
    private final String f7179g;

    /* renamed from: h  reason: collision with root package name */
    private final String f7180h;

    /* renamed from: i  reason: collision with root package name */
    private final String f7181i;

    /* renamed from: j  reason: collision with root package name */
    private final Map f7182j;

    /* renamed from: k  reason: collision with root package name */
    private final String f7183k;

    public d(String str, String str2, String str3, String str4, vo.f environment, String str5, String str6, String str7, String str8, Map map, String str9) {
        Intrinsics.checkNotNullParameter(environment, "environment");
        this.f7173a = str;
        this.f7174b = str2;
        this.f7175c = str3;
        this.f7176d = str4;
        this.f7177e = environment;
        this.f7178f = str5;
        this.f7179g = str6;
        this.f7180h = str7;
        this.f7181i = str8;
        this.f7182j = map;
        this.f7183k = str9;
    }

    public final String a() {
        return this.f7179g;
    }

    public final vo.f b() {
        return this.f7177e;
    }

    public final String c() {
        return this.f7178f;
    }

    public final Map d() {
        return this.f7182j;
    }

    public final String e() {
        return this.f7175c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof d)) {
            return false;
        }
        d dVar = (d) obj;
        if (Intrinsics.areEqual(this.f7173a, dVar.f7173a) && Intrinsics.areEqual(this.f7174b, dVar.f7174b) && Intrinsics.areEqual(this.f7175c, dVar.f7175c) && Intrinsics.areEqual(this.f7176d, dVar.f7176d) && this.f7177e == dVar.f7177e && Intrinsics.areEqual(this.f7178f, dVar.f7178f) && Intrinsics.areEqual(this.f7179g, dVar.f7179g) && Intrinsics.areEqual(this.f7180h, dVar.f7180h) && Intrinsics.areEqual(this.f7181i, dVar.f7181i) && Intrinsics.areEqual(this.f7182j, dVar.f7182j) && Intrinsics.areEqual(this.f7183k, dVar.f7183k)) {
            return true;
        }
        return false;
    }

    public final String f() {
        return this.f7180h;
    }

    public final String g() {
        return this.f7176d;
    }

    public final String h() {
        return this.f7173a;
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
        String str = this.f7173a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int i11 = hashCode * 31;
        String str2 = this.f7174b;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        String str3 = this.f7175c;
        if (str3 == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str3.hashCode();
        }
        int i13 = (i12 + hashCode3) * 31;
        String str4 = this.f7176d;
        if (str4 == null) {
            hashCode4 = 0;
        } else {
            hashCode4 = str4.hashCode();
        }
        int hashCode10 = (((i13 + hashCode4) * 31) + this.f7177e.hashCode()) * 31;
        String str5 = this.f7178f;
        if (str5 == null) {
            hashCode5 = 0;
        } else {
            hashCode5 = str5.hashCode();
        }
        int i14 = (hashCode10 + hashCode5) * 31;
        String str6 = this.f7179g;
        if (str6 == null) {
            hashCode6 = 0;
        } else {
            hashCode6 = str6.hashCode();
        }
        int i15 = (i14 + hashCode6) * 31;
        String str7 = this.f7180h;
        if (str7 == null) {
            hashCode7 = 0;
        } else {
            hashCode7 = str7.hashCode();
        }
        int i16 = (i15 + hashCode7) * 31;
        String str8 = this.f7181i;
        if (str8 == null) {
            hashCode8 = 0;
        } else {
            hashCode8 = str8.hashCode();
        }
        int i17 = (i16 + hashCode8) * 31;
        Map map = this.f7182j;
        if (map == null) {
            hashCode9 = 0;
        } else {
            hashCode9 = map.hashCode();
        }
        int i18 = (i17 + hashCode9) * 31;
        String str9 = this.f7183k;
        if (str9 != null) {
            i10 = str9.hashCode();
        }
        return i18 + i10;
    }

    public final String i() {
        return this.f7174b;
    }

    public final String j() {
        return this.f7183k;
    }

    public String toString() {
        String str = this.f7173a;
        String str2 = this.f7174b;
        String str3 = this.f7175c;
        String str4 = this.f7176d;
        vo.f fVar = this.f7177e;
        String str5 = this.f7178f;
        String str6 = this.f7179g;
        String str7 = this.f7180h;
        String str8 = this.f7181i;
        Map map = this.f7182j;
        String str9 = this.f7183k;
        return "InquiryAttributes(templateId=" + str + ", templateVersion=" + str2 + ", inquiryId=" + str3 + ", sessionToken=" + str4 + ", environment=" + fVar + ", environmentId=" + str5 + ", accountId=" + str6 + ", referenceId=" + str7 + ", note=" + str8 + ", fields=" + map + ", themeSetId=" + str9 + ")";
    }

    public /* synthetic */ d(String str, String str2, String str3, String str4, vo.f fVar, String str5, String str6, String str7, String str8, Map map, String str9, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : str, (i10 & 2) != 0 ? null : str2, (i10 & 4) != 0 ? null : str3, (i10 & 8) != 0 ? null : str4, fVar, (i10 & 32) != 0 ? null : str5, (i10 & 64) != 0 ? null : str6, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str7, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : str8, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : map, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : str9);
    }
}
