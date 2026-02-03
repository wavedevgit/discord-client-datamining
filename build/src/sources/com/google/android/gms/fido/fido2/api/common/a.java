package com.google.android.gms.fido.fido2.api.common;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
import com.google.android.gms.internal.fido.i0;
import gf.q;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a extends hf.a {
    @NonNull
    public static final Parcelable.Creator<a> CREATOR = new f();

    /* renamed from: i  reason: collision with root package name */
    public static final a f13545i = new a(EnumC0162a.SUPPORTED.toString(), null);

    /* renamed from: o  reason: collision with root package name */
    public static final a f13546o = new a(EnumC0162a.NOT_SUPPORTED.toString(), null);

    /* renamed from: d  reason: collision with root package name */
    private final EnumC0162a f13547d;

    /* renamed from: e  reason: collision with root package name */
    private final String f13548e;

    /* renamed from: com.google.android.gms.fido.fido2.api.common.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public enum EnumC0162a implements Parcelable {
        PRESENT("present"),
        SUPPORTED("supported"),
        NOT_SUPPORTED("not-supported");
        
        @NonNull
        public static final Parcelable.Creator<EnumC0162a> CREATOR = new e();

        /* renamed from: d  reason: collision with root package name */
        private final String f13553d;

        EnumC0162a(String str) {
            this.f13553d = str;
        }

        public static EnumC0162a a(String str) {
            EnumC0162a[] values;
            for (EnumC0162a enumC0162a : values()) {
                if (str.equals(enumC0162a.f13553d)) {
                    return enumC0162a;
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
            return this.f13553d;
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            parcel.writeString(this.f13553d);
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
            this.f13547d = EnumC0162a.a(str);
            this.f13548e = str2;
        } catch (b e10) {
            throw new IllegalArgumentException(e10);
        }
    }

    public String b() {
        return this.f13548e;
    }

    public String c() {
        return this.f13547d.toString();
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (!i0.a(this.f13547d, aVar.f13547d) || !i0.a(this.f13548e, aVar.f13548e)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return Arrays.hashCode(new Object[]{this.f13547d, this.f13548e});
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 2, c(), false);
        hf.c.s(parcel, 3, b(), false);
        hf.c.b(parcel, a10);
    }
}
