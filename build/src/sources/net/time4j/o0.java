package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public enum o0 implements rt.w {
    SECONDS(1.0d),
    NANOSECONDS(1.0E-9d);
    
    private final double length;

    o0(double d10) {
        this.length = d10;
    }

    @Override // rt.w
    public double getLength() {
        return this.length;
    }
}
