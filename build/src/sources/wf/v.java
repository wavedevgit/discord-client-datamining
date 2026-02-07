package wf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
import wf.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public enum v implements Parcelable {
    PUBLIC_KEY("public-key");
    
    @NonNull
    public static final Parcelable.Creator<v> CREATOR = new Parcelable.Creator() { // from class: wf.x0
        @Override // android.os.Parcelable.Creator
        public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
            try {
                return v.a(parcel.readString());
            } catch (v.a e10) {
                throw new RuntimeException(e10);
            }
        }

        @Override // android.os.Parcelable.Creator
        public final /* synthetic */ Object[] newArray(int i10) {
            return new v[i10];
        }
    };

    /* renamed from: d  reason: collision with root package name */
    private final String f53846d = "public-key";

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a extends Exception {
        public a(String str) {
            super(str);
        }
    }

    v(String str) {
    }

    public static v a(String str) {
        v[] values;
        for (v vVar : values()) {
            if (str.equals(vVar.f53846d)) {
                return vVar;
            }
        }
        throw new a(String.format("PublicKeyCredentialType %s not supported", str));
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    @Override // java.lang.Enum
    public String toString() {
        return this.f53846d;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f53846d);
    }
}
