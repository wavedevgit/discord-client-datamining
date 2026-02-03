package com.rivereactnative;

import app.rive.runtime.kotlin.core.ViewModelInstance;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final ViewModelInstance f18224a;

    /* renamed from: b  reason: collision with root package name */
    private final String f18225b;

    /* renamed from: c  reason: collision with root package name */
    private final String f18226c;

    /* renamed from: d  reason: collision with root package name */
    private final Job f18227d;

    public b(ViewModelInstance instance, String path, String propertyType, Job job) {
        Intrinsics.checkNotNullParameter(instance, "instance");
        Intrinsics.checkNotNullParameter(path, "path");
        Intrinsics.checkNotNullParameter(propertyType, "propertyType");
        Intrinsics.checkNotNullParameter(job, "job");
        this.f18224a = instance;
        this.f18225b = path;
        this.f18226c = propertyType;
        this.f18227d = job;
    }

    public final ViewModelInstance a() {
        return this.f18224a;
    }

    public final Job b() {
        return this.f18227d;
    }

    public final String c() {
        return this.f18225b;
    }

    public final String d() {
        return this.f18226c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof b) {
            b bVar = (b) obj;
            return Intrinsics.areEqual(this.f18224a, bVar.f18224a) && Intrinsics.areEqual(this.f18225b, bVar.f18225b) && Intrinsics.areEqual(this.f18226c, bVar.f18226c) && Intrinsics.areEqual(this.f18227d, bVar.f18227d);
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f18224a.hashCode() * 31) + this.f18225b.hashCode()) * 31) + this.f18226c.hashCode()) * 31) + this.f18227d.hashCode();
    }

    public String toString() {
        ViewModelInstance viewModelInstance = this.f18224a;
        String str = this.f18225b;
        String str2 = this.f18226c;
        Job job = this.f18227d;
        return "PropertyListener(instance=" + viewModelInstance + ", path=" + str + ", propertyType=" + str2 + ", job=" + job + ")";
    }
}
