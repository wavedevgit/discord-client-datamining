package com.budiyev.android.codescanner;

import android.hardware.Camera;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final Camera f8074a;

    /* renamed from: b  reason: collision with root package name */
    private final Camera.CameraInfo f8075b;

    /* renamed from: c  reason: collision with root package name */
    private final f f8076c;

    /* renamed from: d  reason: collision with root package name */
    private final i f8077d;

    /* renamed from: e  reason: collision with root package name */
    private final i f8078e;

    /* renamed from: f  reason: collision with root package name */
    private final i f8079f;

    /* renamed from: g  reason: collision with root package name */
    private final int f8080g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f8081h;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f8082i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f8083j;

    public g(Camera camera, Camera.CameraInfo cameraInfo, f fVar, i iVar, i iVar2, i iVar3, int i10, boolean z10, boolean z11) {
        this.f8074a = camera;
        this.f8075b = cameraInfo;
        this.f8076c = fVar;
        this.f8077d = iVar;
        this.f8078e = iVar2;
        this.f8079f = iVar3;
        this.f8080g = i10;
        this.f8081h = cameraInfo.facing == 1;
        this.f8082i = z10;
        this.f8083j = z11;
    }

    public Camera a() {
        return this.f8074a;
    }

    public f b() {
        return this.f8076c;
    }

    public int c() {
        return this.f8080g;
    }

    public i d() {
        return this.f8077d;
    }

    public i e() {
        return this.f8078e;
    }

    public i f() {
        return this.f8079f;
    }

    public boolean g() {
        return this.f8082i;
    }

    public boolean h() {
        return this.f8083j;
    }

    public void i() {
        this.f8074a.release();
        this.f8076c.l();
    }

    public boolean j() {
        return this.f8081h;
    }
}
