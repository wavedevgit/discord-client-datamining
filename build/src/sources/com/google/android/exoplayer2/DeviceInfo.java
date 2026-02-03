package com.google.android.exoplayer2;

import android.os.Bundle;
import com.google.android.exoplayer2.DeviceInfo;
import com.google.android.exoplayer2.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DeviceInfo implements g {

    /* renamed from: p  reason: collision with root package name */
    public static final DeviceInfo f11252p = new b(0).e();

    /* renamed from: q  reason: collision with root package name */
    private static final String f11253q = ne.w0.B0(0);

    /* renamed from: r  reason: collision with root package name */
    private static final String f11254r = ne.w0.B0(1);

    /* renamed from: s  reason: collision with root package name */
    private static final String f11255s = ne.w0.B0(2);

    /* renamed from: t  reason: collision with root package name */
    private static final String f11256t = ne.w0.B0(3);

    /* renamed from: u  reason: collision with root package name */
    public static final g.a f11257u = new g.a() { // from class: lc.g
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return DeviceInfo.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final int f11258d;

    /* renamed from: e  reason: collision with root package name */
    public final int f11259e;

    /* renamed from: i  reason: collision with root package name */
    public final int f11260i;

    /* renamed from: o  reason: collision with root package name */
    public final String f11261o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final int f11262a;

        /* renamed from: b  reason: collision with root package name */
        private int f11263b;

        /* renamed from: c  reason: collision with root package name */
        private int f11264c;

        /* renamed from: d  reason: collision with root package name */
        private String f11265d;

        public b(int i10) {
            this.f11262a = i10;
        }

        public DeviceInfo e() {
            boolean z10;
            if (this.f11263b <= this.f11264c) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.a(z10);
            return new DeviceInfo(this);
        }

        public b f(int i10) {
            this.f11264c = i10;
            return this;
        }

        public b g(int i10) {
            this.f11263b = i10;
            return this;
        }

        public b h(String str) {
            boolean z10;
            if (this.f11262a == 0 && str != null) {
                z10 = false;
            } else {
                z10 = true;
            }
            ne.a.a(z10);
            this.f11265d = str;
            return this;
        }
    }

    public static /* synthetic */ DeviceInfo a(Bundle bundle) {
        int i10 = bundle.getInt(f11253q, 0);
        int i11 = bundle.getInt(f11254r, 0);
        int i12 = bundle.getInt(f11255s, 0);
        return new b(i10).g(i11).f(i12).h(bundle.getString(f11256t)).e();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof DeviceInfo)) {
            return false;
        }
        DeviceInfo deviceInfo = (DeviceInfo) obj;
        if (this.f11258d == deviceInfo.f11258d && this.f11259e == deviceInfo.f11259e && this.f11260i == deviceInfo.f11260i && ne.w0.c(this.f11261o, deviceInfo.f11261o)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int i10 = (((((527 + this.f11258d) * 31) + this.f11259e) * 31) + this.f11260i) * 31;
        String str = this.f11261o;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        return i10 + hashCode;
    }

    private DeviceInfo(b bVar) {
        this.f11258d = bVar.f11262a;
        this.f11259e = bVar.f11263b;
        this.f11260i = bVar.f11264c;
        this.f11261o = bVar.f11265d;
    }
}
