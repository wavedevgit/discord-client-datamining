package io.sentry;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s8 {

    /* renamed from: a  reason: collision with root package name */
    private final Boolean f30710a;

    /* renamed from: b  reason: collision with root package name */
    private final Double f30711b;

    /* renamed from: c  reason: collision with root package name */
    private final Double f30712c;

    /* renamed from: d  reason: collision with root package name */
    private final Boolean f30713d;

    /* renamed from: e  reason: collision with root package name */
    private final Double f30714e;

    public s8(Boolean bool) {
        this(bool, null);
    }

    public Double a() {
        return this.f30714e;
    }

    public Boolean b() {
        return this.f30713d;
    }

    public Double c() {
        return this.f30712c;
    }

    public Double d() {
        return this.f30711b;
    }

    public Boolean e() {
        return this.f30710a;
    }

    public s8(Boolean bool, Double d10) {
        this(bool, d10, null, Boolean.FALSE, null);
    }

    public s8(Boolean bool, Double d10, Double d11) {
        this(bool, d10, d11, Boolean.FALSE, null);
    }

    public s8(Boolean bool, Double d10, Boolean bool2, Double d11) {
        this(bool, d10, null, bool2, d11);
    }

    public s8(Boolean bool, Double d10, Double d11, Boolean bool2, Double d12) {
        this.f30710a = bool;
        this.f30711b = d10;
        this.f30712c = d11;
        this.f30713d = Boolean.valueOf(bool.booleanValue() && bool2.booleanValue());
        this.f30714e = d12;
    }
}
