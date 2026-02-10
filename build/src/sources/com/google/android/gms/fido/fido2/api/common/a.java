package com.google.android.gms.fido.fido2.api.common;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
import com.google.android.gms.internal.fido.i0;
import hf.q;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a extends jf.a {
    @NonNull
    public static final Parcelable.Creator<a> CREATOR = new f();

    /* renamed from: i  reason: collision with root package name */
    public static final a f14042i = new a(EnumC0197a.SUPPORTED.toString(), null);

    /* renamed from: o  reason: collision with root package name */
    public static final a f14043o = new a(EnumC0197a.NOT_SUPPORTED.toString(), null);

    /* renamed from: d  reason: collision with root package name */
    private final EnumC0197a f14044d;

    /* renamed from: e  reason: collision with root package name */
    private final String f14045e;

    /* renamed from: com.google.android.gms.fido.fido2.api.common.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public enum EnumC0197a implements Parcelable {
        PRESENT("present"),
        SUPPORTED("supported"),
        NOT_SUPPORTED("not-supported");
        
        @NonNull
        public static final Parcelable.Creator<EnumC0197a> CREATOR = new e();

        /* renamed from: d  reason: collision with root package name */
        private final String f14050d;

        EnumC0197a(String str) {
            this.f14050d = str;
        }

        public static EnumC0197a a(String str) {
            EnumC0197a[] values;
            for (EnumC0197a enumC0197a : values()) {
                if (str.equals(enumC0197a.f14050d)) {
                    return enumC0197a;
                }
            }
            throw new b(str);
        }

        @Override // android.os.Parcelable
        public int describeContents() {
            return 0;
        }

        @Override // java.lang.Enum
        public String toString() {
            return this.f14050d;
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            parcel.writeString(this.f14050d);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b extends Exception {
        public b(String str) {
            super(String.format("TokenBindingStatus %s not supported", str));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(String str, String str2) {
        q.l(str);
        try {
            this.f14044d = EnumC0197a.a(str);
            this.f14045e = str2;
        } catch (b e10) {
            throw new IllegalArgumentException(e10);
        }
    }

    public String b() {
        return this.f14045e;
    }

    public String c() {
        return this.f14044d.toString();
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (!i0.a(this.f14044d, aVar.f14044d) || !i0.a(this.f14045e, aVar.f14045e)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return Arrays.hashCode(new Object[]{this.f14044d, this.f14045e});
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 2, c(), false);
        jf.c.s(parcel, 3, b(), false);
        jf.c.b(parcel, a10);
    }
}
