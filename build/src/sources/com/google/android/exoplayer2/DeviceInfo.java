package com.google.android.exoplayer2;

import android.os.Bundle;
import com.google.android.exoplayer2.DeviceInfo;
import com.google.android.exoplayer2.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DeviceInfo implements g {

    /* renamed from: p  reason: collision with root package name */
    public static final DeviceInfo f12284p = new b(0).e();

    /* renamed from: q  reason: collision with root package name */
    private static final String f12285q = ne.w0.B0(0);

    /* renamed from: r  reason: collision with root package name */
    private static final String f12286r = ne.w0.B0(1);

    /* renamed from: s  reason: collision with root package name */
    private static final String f12287s = ne.w0.B0(2);

    /* renamed from: t  reason: collision with root package name */
    private static final String f12288t = ne.w0.B0(3);

    /* renamed from: u  reason: collision with root package name */
    public static final g.a f12289u = new g.a() { // from class: lc.g
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return DeviceInfo.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final int f12290d;

    /* renamed from: e  reason: collision with root package name */
    public final int f12291e;

    /* renamed from: i  reason: collision with root package name */
    public final int f12292i;

    /* renamed from: o  reason: collision with root package name */
    public final String f12293o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final int f12294a;

        /* renamed from: b  reason: collision with root package name */
        private int f12295b;

        /* renamed from: c  reason: collision with root package name */
        private int f12296c;

        /* renamed from: d  reason: collision with root package name */
        private String f12297d;

        public b(int i10) {
            this.f12294a = i10;
        }

        public DeviceInfo e() {
            boolean z10;
            if (this.f12295b <= this.f12296c) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.a(z10);
            return new DeviceInfo(this);
        }

        public b f(int i10) {
            this.f12296c = i10;
            return this;
        }

        public b g(int i10) {
            this.f12295b = i10;
            return this;
        }

        public b h(String str) {
            boolean z10;
            if (this.f12294a == 0 && str != null) {
                z10 = false;
            } else {
                z10 = true;
            }
            ne.a.a(z10);
            this.f12297d = str;
            return this;
        }
    }

    public static /* synthetic */ DeviceInfo a(Bundle bundle) {
        int i10 = bundle.getInt(f12285q, 0);
        int i11 = bundle.getInt(f12286r, 0);
        int i12 = bundle.getInt(f12287s, 0);
        return new b(i10).g(i11).f(i12).h(bundle.getString(f12288t)).e();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof DeviceInfo)) {
            return false;
        }
        DeviceInfo deviceInfo = (DeviceInfo) obj;
        if (this.f12290d == deviceInfo.f12290d && this.f12291e == deviceInfo.f12291e && this.f12292i == deviceInfo.f12292i && ne.w0.c(this.f12293o, deviceInfo.f12293o)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int i10 = (((((527 + this.f12290d) * 31) + this.f12291e) * 31) + this.f12292i) * 31;
        String str = this.f12293o;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        return i10 + hashCode;
    }

    private DeviceInfo(b bVar) {
        this.f12290d = bVar.f12294a;
        this.f12291e = bVar.f12295b;
        this.f12292i = bVar.f12296c;
        this.f12293o = bVar.f12297d;
    }
}
