package com.budiyev.android.codescanner;

import android.hardware.Camera;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final Camera f9075a;

    /* renamed from: b  reason: collision with root package name */
    private final Camera.CameraInfo f9076b;

    /* renamed from: c  reason: collision with root package name */
    private final f f9077c;

    /* renamed from: d  reason: collision with root package name */
    private final i f9078d;

    /* renamed from: e  reason: collision with root package name */
    private final i f9079e;

    /* renamed from: f  reason: collision with root package name */
    private final i f9080f;

    /* renamed from: g  reason: collision with root package name */
    private final int f9081g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f9082h;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f9083i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f9084j;

    public g(Camera camera, Camera.CameraInfo cameraInfo, f fVar, i iVar, i iVar2, i iVar3, int i10, boolean z10, boolean z11) {
        this.f9075a = camera;
        this.f9076b = cameraInfo;
        this.f9077c = fVar;
        this.f9078d = iVar;
        this.f9079e = iVar2;
        this.f9080f = iVar3;
        this.f9081g = i10;
        this.f9082h = cameraInfo.facing == 1;
        this.f9083i = z10;
        this.f9084j = z11;
    }

    public Camera a() {
        return this.f9075a;
    }

    public f b() {
        return this.f9077c;
    }

    public int c() {
        return this.f9081g;
    }

    public i d() {
        return this.f9078d;
    }

    public i e() {
        return this.f9079e;
    }

    public i f() {
        return this.f9080f;
    }

    public boolean g() {
        return this.f9083i;
    }

    public boolean h() {
        return this.f9084j;
    }

    public void i() {
        this.f9075a.release();
        this.f9077c.l();
    }

    public boolean j() {
        return this.f9082h;
    }
}
