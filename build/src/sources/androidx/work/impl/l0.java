package androidx.work.impl;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class l0 extends s3.b {
    public l0() {
        super(18, 19);
    }

    @Override // s3.b
    public void a(x3.g gVar) {
        gVar.O("ALTER TABLE `WorkSpec` ADD COLUMN `stop_reason` INTEGER NOT NULL DEFAULT -256");
    }
}
