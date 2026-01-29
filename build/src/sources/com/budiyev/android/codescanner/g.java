package com.budiyev.android.codescanner;

import android.hardware.Camera;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final Camera f9477a;

    /* renamed from: b  reason: collision with root package name */
    private final Camera.CameraInfo f9478b;

    /* renamed from: c  reason: collision with root package name */
    private final f f9479c;

    /* renamed from: d  reason: collision with root package name */
    private final i f9480d;

    /* renamed from: e  reason: collision with root package name */
    private final i f9481e;

    /* renamed from: f  reason: collision with root package name */
    private final i f9482f;

    /* renamed from: g  reason: collision with root package name */
    private final int f9483g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f9484h;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f9485i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f9486j;

    public g(Camera camera, Camera.CameraInfo cameraInfo, f fVar, i iVar, i iVar2, i iVar3, int i10, boolean z10, boolean z11) {
        this.f9477a = camera;
        this.f9478b = cameraInfo;
        this.f9479c = fVar;
        this.f9480d = iVar;
        this.f9481e = iVar2;
        this.f9482f = iVar3;
        this.f9483g = i10;
        this.f9484h = cameraInfo.facing == 1;
        this.f9485i = z10;
        this.f9486j = z11;
    }

    public Camera a() {
        return this.f9477a;
    }

    public f b() {
        return this.f9479c;
    }

    public int c() {
        return this.f9483g;
    }

    public i d() {
        return this.f9480d;
    }

    public i e() {
        return this.f9481e;
    }

    public i f() {
        return this.f9482f;
    }

    public boolean g() {
        return this.f9485i;
    }

    public boolean h() {
        return this.f9486j;
    }

    public void i() {
        this.f9477a.release();
        this.f9479c.l();
    }

    public boolean j() {
        return this.f9484h;
    }
}
