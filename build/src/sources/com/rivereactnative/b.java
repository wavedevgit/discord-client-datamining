package com.rivereactnative;

import app.rive.runtime.kotlin.core.ViewModelInstance;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final ViewModelInstance f18591a;

    /* renamed from: b  reason: collision with root package name */
    private final String f18592b;

    /* renamed from: c  reason: collision with root package name */
    private final String f18593c;

    /* renamed from: d  reason: collision with root package name */
    private final Job f18594d;

    public b(ViewModelInstance instance, String path, String propertyType, Job job) {
        Intrinsics.checkNotNullParameter(instance, "instance");
        Intrinsics.checkNotNullParameter(path, "path");
        Intrinsics.checkNotNullParameter(propertyType, "propertyType");
        Intrinsics.checkNotNullParameter(job, "job");
        this.f18591a = instance;
        this.f18592b = path;
        this.f18593c = propertyType;
        this.f18594d = job;
    }

    public final ViewModelInstance a() {
        return this.f18591a;
    }

    public final Job b() {
        return this.f18594d;
    }

    public final String c() {
        return this.f18592b;
    }

    public final String d() {
        return this.f18593c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof b) {
            b bVar = (b) obj;
            return Intrinsics.areEqual(this.f18591a, bVar.f18591a) && Intrinsics.areEqual(this.f18592b, bVar.f18592b) && Intrinsics.areEqual(this.f18593c, bVar.f18593c) && Intrinsics.areEqual(this.f18594d, bVar.f18594d);
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f18591a.hashCode() * 31) + this.f18592b.hashCode()) * 31) + this.f18593c.hashCode()) * 31) + this.f18594d.hashCode();
    }

    public String toString() {
        ViewModelInstance viewModelInstance = this.f18591a;
        String str = this.f18592b;
        String str2 = this.f18593c;
        Job job = this.f18594d;
        return "PropertyListener(instance=" + viewModelInstance + ", path=" + str + ", propertyType=" + str2 + ", job=" + job + ")";
    }
}
