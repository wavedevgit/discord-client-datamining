package yo;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.Map;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final String f54874a;

    /* renamed from: b  reason: collision with root package name */
    private final String f54875b;

    /* renamed from: c  reason: collision with root package name */
    private final String f54876c;

    /* renamed from: d  reason: collision with root package name */
    private final String f54877d;

    /* renamed from: e  reason: collision with root package name */
    private final so.f f54878e;

    /* renamed from: f  reason: collision with root package name */
    private final String f54879f;

    /* renamed from: g  reason: collision with root package name */
    private final String f54880g;

    /* renamed from: h  reason: collision with root package name */
    private final String f54881h;

    /* renamed from: i  reason: collision with root package name */
    private final String f54882i;

    /* renamed from: j  reason: collision with root package name */
    private final Map f54883j;

    /* renamed from: k  reason: collision with root package name */
    private final String f54884k;

    public d(String str, String str2, String str3, String str4, so.f environment, String str5, String str6, String str7, String str8, Map map, String str9) {
        Intrinsics.checkNotNullParameter(environment, "environment");
        this.f54874a = str;
        this.f54875b = str2;
        this.f54876c = str3;
        this.f54877d = str4;
        this.f54878e = environment;
        this.f54879f = str5;
        this.f54880g = str6;
        this.f54881h = str7;
        this.f54882i = str8;
        this.f54883j = map;
        this.f54884k = str9;
    }

    public final String a() {
        return this.f54880g;
    }

    public final so.f b() {
        return this.f54878e;
    }

    public final String c() {
        return this.f54879f;
    }

    public final Map d() {
        return this.f54883j;
    }

    public final String e() {
        return this.f54876c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof d)) {
            return false;
        }
        d dVar = (d) obj;
        if (Intrinsics.areEqual(this.f54874a, dVar.f54874a) && Intrinsics.areEqual(this.f54875b, dVar.f54875b) && Intrinsics.areEqual(this.f54876c, dVar.f54876c) && Intrinsics.areEqual(this.f54877d, dVar.f54877d) && this.f54878e == dVar.f54878e && Intrinsics.areEqual(this.f54879f, dVar.f54879f) && Intrinsics.areEqual(this.f54880g, dVar.f54880g) && Intrinsics.areEqual(this.f54881h, dVar.f54881h) && Intrinsics.areEqual(this.f54882i, dVar.f54882i) && Intrinsics.areEqual(this.f54883j, dVar.f54883j) && Intrinsics.areEqual(this.f54884k, dVar.f54884k)) {
            return true;
        }
        return false;
    }

    public final String f() {
        return this.f54881h;
    }

    public final String g() {
        return this.f54877d;
    }

    public final String h() {
        return this.f54874a;
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
        String str = this.f54874a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int i11 = hashCode * 31;
        String str2 = this.f54875b;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        String str3 = this.f54876c;
        if (str3 == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str3.hashCode();
        }
        int i13 = (i12 + hashCode3) * 31;
        String str4 = this.f54877d;
        if (str4 == null) {
            hashCode4 = 0;
        } else {
            hashCode4 = str4.hashCode();
        }
        int hashCode10 = (((i13 + hashCode4) * 31) + this.f54878e.hashCode()) * 31;
        String str5 = this.f54879f;
        if (str5 == null) {
            hashCode5 = 0;
        } else {
            hashCode5 = str5.hashCode();
        }
        int i14 = (hashCode10 + hashCode5) * 31;
        String str6 = this.f54880g;
        if (str6 == null) {
            hashCode6 = 0;
        } else {
            hashCode6 = str6.hashCode();
        }
        int i15 = (i14 + hashCode6) * 31;
        String str7 = this.f54881h;
        if (str7 == null) {
            hashCode7 = 0;
        } else {
            hashCode7 = str7.hashCode();
        }
        int i16 = (i15 + hashCode7) * 31;
        String str8 = this.f54882i;
        if (str8 == null) {
            hashCode8 = 0;
        } else {
            hashCode8 = str8.hashCode();
        }
        int i17 = (i16 + hashCode8) * 31;
        Map map = this.f54883j;
        if (map == null) {
            hashCode9 = 0;
        } else {
            hashCode9 = map.hashCode();
        }
        int i18 = (i17 + hashCode9) * 31;
        String str9 = this.f54884k;
        if (str9 != null) {
            i10 = str9.hashCode();
        }
        return i18 + i10;
    }

    public final String i() {
        return this.f54875b;
    }

    public final String j() {
        return this.f54884k;
    }

    public String toString() {
        String str = this.f54874a;
        String str2 = this.f54875b;
        String str3 = this.f54876c;
        String str4 = this.f54877d;
        so.f fVar = this.f54878e;
        String str5 = this.f54879f;
        String str6 = this.f54880g;
        String str7 = this.f54881h;
        String str8 = this.f54882i;
        Map map = this.f54883j;
        String str9 = this.f54884k;
        return "InquiryAttributes(templateId=" + str + ", templateVersion=" + str2 + ", inquiryId=" + str3 + ", sessionToken=" + str4 + ", environment=" + fVar + ", environmentId=" + str5 + ", accountId=" + str6 + ", referenceId=" + str7 + ", note=" + str8 + ", fields=" + map + ", themeSetId=" + str9 + ")";
    }

    public /* synthetic */ d(String str, String str2, String str3, String str4, so.f fVar, String str5, String str6, String str7, String str8, Map map, String str9, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : str, (i10 & 2) != 0 ? null : str2, (i10 & 4) != 0 ? null : str3, (i10 & 8) != 0 ? null : str4, fVar, (i10 & 32) != 0 ? null : str5, (i10 & 64) != 0 ? null : str6, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str7, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : str8, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : map, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : str9);
    }
}
