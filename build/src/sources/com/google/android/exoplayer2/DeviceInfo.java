package com.google.android.exoplayer2;

import android.os.Bundle;
import com.google.android.exoplayer2.DeviceInfo;
import com.google.android.exoplayer2.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DeviceInfo implements g {

    /* renamed from: p  reason: collision with root package name */
    public static final DeviceInfo f11676p = new b(0).e();

    /* renamed from: q  reason: collision with root package name */
    private static final String f11677q = oe.w0.B0(0);

    /* renamed from: r  reason: collision with root package name */
    private static final String f11678r = oe.w0.B0(1);

    /* renamed from: s  reason: collision with root package name */
    private static final String f11679s = oe.w0.B0(2);

    /* renamed from: t  reason: collision with root package name */
    private static final String f11680t = oe.w0.B0(3);

    /* renamed from: u  reason: collision with root package name */
    public static final g.a f11681u = new g.a() { // from class: mc.g
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return DeviceInfo.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final int f11682d;

    /* renamed from: e  reason: collision with root package name */
    public final int f11683e;

    /* renamed from: i  reason: collision with root package name */
    public final int f11684i;

    /* renamed from: o  reason: collision with root package name */
    public final String f11685o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final int f11686a;

        /* renamed from: b  reason: collision with root package name */
        private int f11687b;

        /* renamed from: c  reason: collision with root package name */
        private int f11688c;

        /* renamed from: d  reason: collision with root package name */
        private String f11689d;

        public b(int i10) {
            this.f11686a = i10;
        }

        public DeviceInfo e() {
            boolean z10;
            if (this.f11687b <= this.f11688c) {
                z10 = true;
            } else {
                z10 = false;
            }
            oe.a.a(z10);
            return new DeviceInfo(this);
        }

        public b f(int i10) {
            this.f11688c = i10;
            return this;
        }

        public b g(int i10) {
            this.f11687b = i10;
            return this;
        }

        public b h(String str) {
            boolean z10;
            if (this.f11686a == 0 && str != null) {
                z10 = false;
            } else {
                z10 = true;
            }
            oe.a.a(z10);
            this.f11689d = str;
            return this;
        }
    }

    public static /* synthetic */ DeviceInfo a(Bundle bundle) {
        int i10 = bundle.getInt(f11677q, 0);
        int i11 = bundle.getInt(f11678r, 0);
        int i12 = bundle.getInt(f11679s, 0);
        return new b(i10).g(i11).f(i12).h(bundle.getString(f11680t)).e();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof DeviceInfo)) {
            return false;
        }
        DeviceInfo deviceInfo = (DeviceInfo) obj;
        if (this.f11682d == deviceInfo.f11682d && this.f11683e == deviceInfo.f11683e && this.f11684i == deviceInfo.f11684i && oe.w0.c(this.f11685o, deviceInfo.f11685o)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int i10 = (((((527 + this.f11682d) * 31) + this.f11683e) * 31) + this.f11684i) * 31;
        String str = this.f11685o;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        return i10 + hashCode;
    }

    private DeviceInfo(b bVar) {
        this.f11682d = bVar.f11686a;
        this.f11683e = bVar.f11687b;
        this.f11684i = bVar.f11688c;
        this.f11685o = bVar.f11689d;
    }
}
