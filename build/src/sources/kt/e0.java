package kt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class e0 extends r {
    private static final long serialVersionUID = -5638437652574160520L;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e0(x xVar, p pVar) {
        super(b(xVar, pVar));
    }

    private static String a(x xVar, Object obj) {
        return "Cannot find any rule for chronological unit \"" + c(obj) + "\" in: " + xVar.o().getName();
    }

    private static String b(x xVar, p pVar) {
        return "Cannot find any rule for chronological element \"" + pVar.name() + "\" in: " + xVar.o().getName();
    }

    private static String c(Object obj) {
        if (obj instanceof Enum) {
            return ((Enum) Enum.class.cast(obj)).name();
        }
        return obj.toString();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public e0(String str) {
        super(str);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public e0(x xVar, Object obj) {
        super(a(xVar, obj));
    }
}
