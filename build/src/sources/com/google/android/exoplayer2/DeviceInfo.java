package com.google.android.exoplayer2;

import android.os.Bundle;
import com.google.android.exoplayer2.DeviceInfo;
import com.google.android.exoplayer2.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DeviceInfo implements g {

    /* renamed from: p  reason: collision with root package name */
    public static final DeviceInfo f11536p = new b(0).e();

    /* renamed from: q  reason: collision with root package name */
    private static final String f11537q = ne.w0.B0(0);

    /* renamed from: r  reason: collision with root package name */
    private static final String f11538r = ne.w0.B0(1);

    /* renamed from: s  reason: collision with root package name */
    private static final String f11539s = ne.w0.B0(2);

    /* renamed from: t  reason: collision with root package name */
    private static final String f11540t = ne.w0.B0(3);

    /* renamed from: u  reason: collision with root package name */
    public static final g.a f11541u = new g.a() { // from class: lc.g
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return DeviceInfo.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final int f11542d;

    /* renamed from: e  reason: collision with root package name */
    public final int f11543e;

    /* renamed from: i  reason: collision with root package name */
    public final int f11544i;

    /* renamed from: o  reason: collision with root package name */
    public final String f11545o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final int f11546a;

        /* renamed from: b  reason: collision with root package name */
        private int f11547b;

        /* renamed from: c  reason: collision with root package name */
        private int f11548c;

        /* renamed from: d  reason: collision with root package name */
        private String f11549d;

        public b(int i10) {
            this.f11546a = i10;
        }

        public DeviceInfo e() {
            boolean z10;
            if (this.f11547b <= this.f11548c) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.a(z10);
            return new DeviceInfo(this);
        }

        public b f(int i10) {
            this.f11548c = i10;
            return this;
        }

        public b g(int i10) {
            this.f11547b = i10;
            return this;
        }

        public b h(String str) {
            boolean z10;
            if (this.f11546a == 0 && str != null) {
                z10 = false;
            } else {
                z10 = true;
            }
            ne.a.a(z10);
            this.f11549d = str;
            return this;
        }
    }

    public static /* synthetic */ DeviceInfo a(Bundle bundle) {
        int i10 = bundle.getInt(f11537q, 0);
        int i11 = bundle.getInt(f11538r, 0);
        int i12 = bundle.getInt(f11539s, 0);
        return new b(i10).g(i11).f(i12).h(bundle.getString(f11540t)).e();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof DeviceInfo)) {
            return false;
        }
        DeviceInfo deviceInfo = (DeviceInfo) obj;
        if (this.f11542d == deviceInfo.f11542d && this.f11543e == deviceInfo.f11543e && this.f11544i == deviceInfo.f11544i && ne.w0.c(this.f11545o, deviceInfo.f11545o)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int i10 = (((((527 + this.f11542d) * 31) + this.f11543e) * 31) + this.f11544i) * 31;
        String str = this.f11545o;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        return i10 + hashCode;
    }

    private DeviceInfo(b bVar) {
        this.f11542d = bVar.f11546a;
        this.f11543e = bVar.f11547b;
        this.f11544i = bVar.f11548c;
        this.f11545o = bVar.f11549d;
    }
}
