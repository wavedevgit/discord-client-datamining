package com.budiyev.android.codescanner;

import android.hardware.Camera;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final Camera f9106a;

    /* renamed from: b  reason: collision with root package name */
    private final Camera.CameraInfo f9107b;

    /* renamed from: c  reason: collision with root package name */
    private final f f9108c;

    /* renamed from: d  reason: collision with root package name */
    private final i f9109d;

    /* renamed from: e  reason: collision with root package name */
    private final i f9110e;

    /* renamed from: f  reason: collision with root package name */
    private final i f9111f;

    /* renamed from: g  reason: collision with root package name */
    private final int f9112g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f9113h;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f9114i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f9115j;

    public g(Camera camera, Camera.CameraInfo cameraInfo, f fVar, i iVar, i iVar2, i iVar3, int i10, boolean z10, boolean z11) {
        this.f9106a = camera;
        this.f9107b = cameraInfo;
        this.f9108c = fVar;
        this.f9109d = iVar;
        this.f9110e = iVar2;
        this.f9111f = iVar3;
        this.f9112g = i10;
        this.f9113h = cameraInfo.facing == 1;
        this.f9114i = z10;
        this.f9115j = z11;
    }

    public Camera a() {
        return this.f9106a;
    }

    public f b() {
        return this.f9108c;
    }

    public int c() {
        return this.f9112g;
    }

    public i d() {
        return this.f9109d;
    }

    public i e() {
        return this.f9110e;
    }

    public i f() {
        return this.f9111f;
    }

    public boolean g() {
        return this.f9114i;
    }

    public boolean h() {
        return this.f9115j;
    }

    public void i() {
        this.f9106a.release();
        this.f9108c.l();
    }

    public boolean j() {
        return this.f9113h;
    }
}
