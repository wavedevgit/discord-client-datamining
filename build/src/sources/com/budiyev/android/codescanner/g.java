package com.budiyev.android.codescanner;

import android.hardware.Camera;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final Camera f8459a;

    /* renamed from: b  reason: collision with root package name */
    private final Camera.CameraInfo f8460b;

    /* renamed from: c  reason: collision with root package name */
    private final f f8461c;

    /* renamed from: d  reason: collision with root package name */
    private final i f8462d;

    /* renamed from: e  reason: collision with root package name */
    private final i f8463e;

    /* renamed from: f  reason: collision with root package name */
    private final i f8464f;

    /* renamed from: g  reason: collision with root package name */
    private final int f8465g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f8466h;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f8467i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f8468j;

    public g(Camera camera, Camera.CameraInfo cameraInfo, f fVar, i iVar, i iVar2, i iVar3, int i10, boolean z10, boolean z11) {
        this.f8459a = camera;
        this.f8460b = cameraInfo;
        this.f8461c = fVar;
        this.f8462d = iVar;
        this.f8463e = iVar2;
        this.f8464f = iVar3;
        this.f8465g = i10;
        this.f8466h = cameraInfo.facing == 1;
        this.f8467i = z10;
        this.f8468j = z11;
    }

    public Camera a() {
        return this.f8459a;
    }

    public f b() {
        return this.f8461c;
    }

    public int c() {
        return this.f8465g;
    }

    public i d() {
        return this.f8462d;
    }

    public i e() {
        return this.f8463e;
    }

    public i f() {
        return this.f8464f;
    }

    public boolean g() {
        return this.f8467i;
    }

    public boolean h() {
        return this.f8468j;
    }

    public void i() {
        this.f8459a.release();
        this.f8461c.l();
    }

    public boolean j() {
        return this.f8466h;
    }
}
