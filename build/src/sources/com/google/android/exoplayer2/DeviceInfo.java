package com.google.android.exoplayer2;

import android.os.Bundle;
import com.google.android.exoplayer2.DeviceInfo;
import com.google.android.exoplayer2.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DeviceInfo implements g {

    /* renamed from: p  reason: collision with root package name */
    public static final DeviceInfo f12655p = new b(0).e();

    /* renamed from: q  reason: collision with root package name */
    private static final String f12656q = ne.w0.B0(0);

    /* renamed from: r  reason: collision with root package name */
    private static final String f12657r = ne.w0.B0(1);

    /* renamed from: s  reason: collision with root package name */
    private static final String f12658s = ne.w0.B0(2);

    /* renamed from: t  reason: collision with root package name */
    private static final String f12659t = ne.w0.B0(3);

    /* renamed from: u  reason: collision with root package name */
    public static final g.a f12660u = new g.a() { // from class: lc.g
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return DeviceInfo.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final int f12661d;

    /* renamed from: e  reason: collision with root package name */
    public final int f12662e;

    /* renamed from: i  reason: collision with root package name */
    public final int f12663i;

    /* renamed from: o  reason: collision with root package name */
    public final String f12664o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final int f12665a;

        /* renamed from: b  reason: collision with root package name */
        private int f12666b;

        /* renamed from: c  reason: collision with root package name */
        private int f12667c;

        /* renamed from: d  reason: collision with root package name */
        private String f12668d;

        public b(int i10) {
            this.f12665a = i10;
        }

        public DeviceInfo e() {
            boolean z10;
            if (this.f12666b <= this.f12667c) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.a(z10);
            return new DeviceInfo(this);
        }

        public b f(int i10) {
            this.f12667c = i10;
            return this;
        }

        public b g(int i10) {
            this.f12666b = i10;
            return this;
        }

        public b h(String str) {
            boolean z10;
            if (this.f12665a == 0 && str != null) {
                z10 = false;
            } else {
                z10 = true;
            }
            ne.a.a(z10);
            this.f12668d = str;
            return this;
        }
    }

    public static /* synthetic */ DeviceInfo a(Bundle bundle) {
        int i10 = bundle.getInt(f12656q, 0);
        int i11 = bundle.getInt(f12657r, 0);
        int i12 = bundle.getInt(f12658s, 0);
        return new b(i10).g(i11).f(i12).h(bundle.getString(f12659t)).e();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof DeviceInfo)) {
            return false;
        }
        DeviceInfo deviceInfo = (DeviceInfo) obj;
        if (this.f12661d == deviceInfo.f12661d && this.f12662e == deviceInfo.f12662e && this.f12663i == deviceInfo.f12663i && ne.w0.c(this.f12664o, deviceInfo.f12664o)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int i10 = (((((527 + this.f12661d) * 31) + this.f12662e) * 31) + this.f12663i) * 31;
        String str = this.f12664o;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        return i10 + hashCode;
    }

    private DeviceInfo(b bVar) {
        this.f12661d = bVar.f12665a;
        this.f12662e = bVar.f12666b;
        this.f12663i = bVar.f12667c;
        this.f12664o = bVar.f12668d;
    }
}
