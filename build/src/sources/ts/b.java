package ts;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface b extends vs.a {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public static Object a(b bVar, Object obj) {
            Object a10 = bVar.a(obj);
            if (a10 != null) {
                return a10;
            }
            throw new IllegalStateException("Field " + bVar.getName() + " is not set");
        }
    }

    Object a(Object obj);

    Object b(Object obj);
}
