package com.google.android.exoplayer2;

import android.os.Bundle;
import com.google.android.exoplayer2.DeviceInfo;
import com.google.android.exoplayer2.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DeviceInfo implements g {

    /* renamed from: p  reason: collision with root package name */
    public static final DeviceInfo f12253p = new b(0).e();

    /* renamed from: q  reason: collision with root package name */
    private static final String f12254q = oe.w0.B0(0);

    /* renamed from: r  reason: collision with root package name */
    private static final String f12255r = oe.w0.B0(1);

    /* renamed from: s  reason: collision with root package name */
    private static final String f12256s = oe.w0.B0(2);

    /* renamed from: t  reason: collision with root package name */
    private static final String f12257t = oe.w0.B0(3);

    /* renamed from: u  reason: collision with root package name */
    public static final g.a f12258u = new g.a() { // from class: mc.g
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return DeviceInfo.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final int f12259d;

    /* renamed from: e  reason: collision with root package name */
    public final int f12260e;

    /* renamed from: i  reason: collision with root package name */
    public final int f12261i;

    /* renamed from: o  reason: collision with root package name */
    public final String f12262o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final int f12263a;

        /* renamed from: b  reason: collision with root package name */
        private int f12264b;

        /* renamed from: c  reason: collision with root package name */
        private int f12265c;

        /* renamed from: d  reason: collision with root package name */
        private String f12266d;

        public b(int i10) {
            this.f12263a = i10;
        }

        public DeviceInfo e() {
            boolean z10;
            if (this.f12264b <= this.f12265c) {
                z10 = true;
            } else {
                z10 = false;
            }
            oe.a.a(z10);
            return new DeviceInfo(this);
        }

        public b f(int i10) {
            this.f12265c = i10;
            return this;
        }

        public b g(int i10) {
            this.f12264b = i10;
            return this;
        }

        public b h(String str) {
            boolean z10;
            if (this.f12263a == 0 && str != null) {
                z10 = false;
            } else {
                z10 = true;
            }
            oe.a.a(z10);
            this.f12266d = str;
            return this;
        }
    }

    public static /* synthetic */ DeviceInfo a(Bundle bundle) {
        int i10 = bundle.getInt(f12254q, 0);
        int i11 = bundle.getInt(f12255r, 0);
        int i12 = bundle.getInt(f12256s, 0);
        return new b(i10).g(i11).f(i12).h(bundle.getString(f12257t)).e();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof DeviceInfo)) {
            return false;
        }
        DeviceInfo deviceInfo = (DeviceInfo) obj;
        if (this.f12259d == deviceInfo.f12259d && this.f12260e == deviceInfo.f12260e && this.f12261i == deviceInfo.f12261i && oe.w0.c(this.f12262o, deviceInfo.f12262o)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int i10 = (((((527 + this.f12259d) * 31) + this.f12260e) * 31) + this.f12261i) * 31;
        String str = this.f12262o;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        return i10 + hashCode;
    }

    private DeviceInfo(b bVar) {
        this.f12259d = bVar.f12263a;
        this.f12260e = bVar.f12264b;
        this.f12261i = bVar.f12265c;
        this.f12262o = bVar.f12266d;
    }
}
