package com.budiyev.android.codescanner;

import android.hardware.Camera;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final Camera f9076a;

    /* renamed from: b  reason: collision with root package name */
    private final Camera.CameraInfo f9077b;

    /* renamed from: c  reason: collision with root package name */
    private final f f9078c;

    /* renamed from: d  reason: collision with root package name */
    private final i f9079d;

    /* renamed from: e  reason: collision with root package name */
    private final i f9080e;

    /* renamed from: f  reason: collision with root package name */
    private final i f9081f;

    /* renamed from: g  reason: collision with root package name */
    private final int f9082g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f9083h;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f9084i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f9085j;

    public g(Camera camera, Camera.CameraInfo cameraInfo, f fVar, i iVar, i iVar2, i iVar3, int i10, boolean z10, boolean z11) {
        this.f9076a = camera;
        this.f9077b = cameraInfo;
        this.f9078c = fVar;
        this.f9079d = iVar;
        this.f9080e = iVar2;
        this.f9081f = iVar3;
        this.f9082g = i10;
        this.f9083h = cameraInfo.facing == 1;
        this.f9084i = z10;
        this.f9085j = z11;
    }

    public Camera a() {
        return this.f9076a;
    }

    public f b() {
        return this.f9078c;
    }

    public int c() {
        return this.f9082g;
    }

    public i d() {
        return this.f9079d;
    }

    public i e() {
        return this.f9080e;
    }

    public i f() {
        return this.f9081f;
    }

    public boolean g() {
        return this.f9084i;
    }

    public boolean h() {
        return this.f9085j;
    }

    public void i() {
        this.f9076a.release();
        this.f9078c.l();
    }

    public boolean j() {
        return this.f9083h;
    }
}
