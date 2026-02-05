package com.google.android.exoplayer2;

import android.os.Bundle;
import com.google.android.exoplayer2.DeviceInfo;
import com.google.android.exoplayer2.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DeviceInfo implements g {

    /* renamed from: p  reason: collision with root package name */
    public static final DeviceInfo f11637p = new b(0).e();

    /* renamed from: q  reason: collision with root package name */
    private static final String f11638q = ne.w0.B0(0);

    /* renamed from: r  reason: collision with root package name */
    private static final String f11639r = ne.w0.B0(1);

    /* renamed from: s  reason: collision with root package name */
    private static final String f11640s = ne.w0.B0(2);

    /* renamed from: t  reason: collision with root package name */
    private static final String f11641t = ne.w0.B0(3);

    /* renamed from: u  reason: collision with root package name */
    public static final g.a f11642u = new g.a() { // from class: lc.g
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return DeviceInfo.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final int f11643d;

    /* renamed from: e  reason: collision with root package name */
    public final int f11644e;

    /* renamed from: i  reason: collision with root package name */
    public final int f11645i;

    /* renamed from: o  reason: collision with root package name */
    public final String f11646o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final int f11647a;

        /* renamed from: b  reason: collision with root package name */
        private int f11648b;

        /* renamed from: c  reason: collision with root package name */
        private int f11649c;

        /* renamed from: d  reason: collision with root package name */
        private String f11650d;

        public b(int i10) {
            this.f11647a = i10;
        }

        public DeviceInfo e() {
            boolean z10;
            if (this.f11648b <= this.f11649c) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.a(z10);
            return new DeviceInfo(this);
        }

        public b f(int i10) {
            this.f11649c = i10;
            return this;
        }

        public b g(int i10) {
            this.f11648b = i10;
            return this;
        }

        public b h(String str) {
            boolean z10;
            if (this.f11647a == 0 && str != null) {
                z10 = false;
            } else {
                z10 = true;
            }
            ne.a.a(z10);
            this.f11650d = str;
            return this;
        }
    }

    public static /* synthetic */ DeviceInfo a(Bundle bundle) {
        int i10 = bundle.getInt(f11638q, 0);
        int i11 = bundle.getInt(f11639r, 0);
        int i12 = bundle.getInt(f11640s, 0);
        return new b(i10).g(i11).f(i12).h(bundle.getString(f11641t)).e();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof DeviceInfo)) {
            return false;
        }
        DeviceInfo deviceInfo = (DeviceInfo) obj;
        if (this.f11643d == deviceInfo.f11643d && this.f11644e == deviceInfo.f11644e && this.f11645i == deviceInfo.f11645i && ne.w0.c(this.f11646o, deviceInfo.f11646o)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int i10 = (((((527 + this.f11643d) * 31) + this.f11644e) * 31) + this.f11645i) * 31;
        String str = this.f11646o;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        return i10 + hashCode;
    }

    private DeviceInfo(b bVar) {
        this.f11643d = bVar.f11647a;
        this.f11644e = bVar.f11648b;
        this.f11645i = bVar.f11649c;
        this.f11646o = bVar.f11650d;
    }
}
