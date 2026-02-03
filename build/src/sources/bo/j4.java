package bo;

import android.os.Parcel;
import android.os.Parcelable;
import bo.c4;
import java.util.LinkedHashMap;
import java.util.Locale;
import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j4 implements Parcelable {
    @NotNull
    public static final Parcelable.Creator<j4> CREATOR = new b();

    /* renamed from: d  reason: collision with root package name */
    private final Map f6976d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final Map f6977a = new LinkedHashMap();

        public final j4 a() {
            return new j4(this.f6977a);
        }

        public final void b(String str, String str2, c4.e side, String text) {
            Intrinsics.checkNotNullParameter(side, "side");
            Intrinsics.checkNotNullParameter(text, "text");
            Map map = this.f6977a;
            String str3 = str + "-" + str2 + "-" + side.g();
            Locale US = Locale.US;
            Intrinsics.checkNotNullExpressionValue(US, "US");
            String lowerCase = str3.toLowerCase(US);
            Intrinsics.checkNotNullExpressionValue(lowerCase, "toLowerCase(...)");
            map.put(lowerCase, text);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final j4 createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            int readInt = parcel.readInt();
            LinkedHashMap linkedHashMap = new LinkedHashMap(readInt);
            for (int i10 = 0; i10 != readInt; i10++) {
                linkedHashMap.put(parcel.readString(), parcel.readString());
            }
            return new j4(linkedHashMap);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final j4[] newArray(int i10) {
            return new j4[i10];
        }
    }

    public j4(Map backingData) {
        Intrinsics.checkNotNullParameter(backingData, "backingData");
        this.f6976d = backingData;
    }

    public final String a(String str, String str2, c4.e side) {
        Intrinsics.checkNotNullParameter(side, "side");
        if (str == null) {
            str = "unpopulated";
        }
        if (Intrinsics.areEqual(str2, "auto-classification") || str2 == null) {
            str2 = "unpopulated";
        }
        Map map = this.f6976d;
        Locale US = Locale.US;
        Intrinsics.checkNotNullExpressionValue(US, "US");
        String lowerCase = (str + "-" + str2 + "-" + side.g()).toLowerCase(US);
        Intrinsics.checkNotNullExpressionValue(lowerCase, "toLowerCase(...)");
        String str3 = (String) map.get(lowerCase);
        if (str3 != null) {
            return str3;
        }
        Map map2 = this.f6976d;
        Intrinsics.checkNotNullExpressionValue(US, "US");
        String lowerCase2 = (((String) null) + "-" + str2 + "-" + side.g()).toLowerCase(US);
        Intrinsics.checkNotNullExpressionValue(lowerCase2, "toLowerCase(...)");
        String str4 = (String) map2.get(lowerCase2);
        if (str4 != null) {
            return str4;
        }
        Map map3 = this.f6976d;
        Intrinsics.checkNotNullExpressionValue(US, "US");
        String lowerCase3 = (((String) null) + "-" + ((String) null) + "-" + side.g()).toLowerCase(US);
        Intrinsics.checkNotNullExpressionValue(lowerCase3, "toLowerCase(...)");
        String str5 = (String) map3.get(lowerCase3);
        if (str5 == null) {
            return null;
        }
        return str5;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if ((obj instanceof j4) && Intrinsics.areEqual(this.f6976d, ((j4) obj).f6976d)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f6976d.hashCode();
    }

    public String toString() {
        Map map = this.f6976d;
        return "OverridableText(backingData=" + map + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        Map map = this.f6976d;
        dest.writeInt(map.size());
        for (Map.Entry entry : map.entrySet()) {
            dest.writeString((String) entry.getKey());
            dest.writeString((String) entry.getValue());
        }
    }
}
